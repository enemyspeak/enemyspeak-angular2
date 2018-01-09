export class DetailProject {
  name: string;
  description: string;
  link: string;
  year: string;
  grid: string[];
}

export class DetailItem {
  id: string;
  name: string;
  title: string;
  description: string;
  keyColor: string;
  headerColor: string;
  year: string;
  imageURL: string;
  projects: DetailProject[];
}
