import { Attribute } from "./components/Profile/Profile"

export const getData = async (): Promise<Array<Attribute>> => {
      const response = await fetch('https://www.breakingbadapi.com/api/characters');
      const data = await response.json();
      console.log(data);
      return data;
};    