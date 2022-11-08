interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody{
    _type:'social';
    title:string;
    url:string
    
}