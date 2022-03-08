import { userRoles } from './repositories/users';
import { send } from './newsletter';

/**
 * Gated publisher.
 * Initialised with newsletter content, which is
 * only delivered once two administrators have approved
 */
export class Publisher {
  approvals: string[] = [];

  constructor(readonly content: string) {
    if (!content) {
      throw Error('No content provided');
    }
  }

  approve(username: string) {
    const roles = userRoles(username);

    if (roles.includes('admin')) {
      this.approvals.push(username);
    }

    if (this.approvals.length >= 2) {
      send(this.content);
    }
  }
}