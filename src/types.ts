export type Category = 'work' | 'installation';

export interface Work {
  id: string;
  category: Category;
  title: string;
  artist: string;
  description: string;
  performers?: string[];
  folderName: string;
  hasVideo: boolean;
  hasAudio: boolean;
  hasImage: boolean;
  extraNote?: string;
  
  // 必须要有这一行，且注意是 string[] 后面有个分号
  gallery?: string[]; 
}

export type ViewState = 'home' | 'list-work' | 'list-installation' | 'detail' | 'team';