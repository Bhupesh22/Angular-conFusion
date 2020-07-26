import { Injectable } from '@angular/core';
import { leader } from '../shared/LEADERS';
import { LEADER } from '../shared/leader';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): LEADER[]{
    return leader;
  }

  getLeader(id: string): LEADER {
    return leader.filter((lead) => (lead.id === id))[0];
  }

  getFeaturedLeader(): LEADER {
    return leader.filter((promotion) => promotion.featured)[0];
  }


}
