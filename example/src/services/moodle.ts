import { Alert } from 'react-native';
import { MOODLE_URL as MoodleUrl } from '@env';
interface MoodleTokenResponse {
  token: string;
  privatetoken?: string;
}

interface MoodleUserInfo {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface MoodleTokenResponse {
  token: string;
  privatetoken?: string;
}

interface MoodleUserInfo {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

export class MoodleService {
  private baseUrl: string;

  constructor() {
    this.baseUrl =  MoodleUrl;
  }

  async login(username: string, password: string): Promise<MoodleUserInfo | null> {
    try {
      // First, get a token
      const tokenResponse = await this.getToken(username, password);
      if (!tokenResponse.token) {
        return null;
      }

      // Then, get user info using the token
      return await this.getUserInfo(tokenResponse.token);
    } catch (error) {
      console.error('Moodle login error:', error);
      return null;
    }
  }

  private async getToken(username: string, password: string): Promise<MoodleTokenResponse> {
    const response = await fetch(`${this.baseUrl}/login/token.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username,
        password,
        service: 'moodle_mobile_app',
      }),
    });

    return response.json();
  }

  private async getUserInfo(token: string): Promise<MoodleUserInfo> {
    const response = await fetch(`${this.baseUrl}/webservice/rest/server.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        wstoken: token,
        wsfunction: 'core_webservice_get_site_info',
        moodlewsrestformat: 'json',
      }),
    });

    return response.json();
  }
}