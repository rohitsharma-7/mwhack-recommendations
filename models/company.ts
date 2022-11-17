export interface Company {
  name: string;
  address: {
    city: string;
    country: string;
  };
  logo: string;
  category: string;
  description: string;
  pendingEndorsements: string[];
  endorsements: Endorsement[];
  website: string;
  email: string;
}

export interface Endorsement {
  endorser: {
    name: string;
    picture: string;
    currentDesignation: string;
  };

  description: string;
}
