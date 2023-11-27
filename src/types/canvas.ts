export interface ICanvasPayload {
  name: string | null;
  description: string | null;
  content?: any;
}

export interface ICanvas extends ICanvasPayload {
  id: string | null;
  updatedAt: string | null | Date;
  createdAt: string | null | Date;
}

export interface ICanvasResponse {
  canvases: ICanvas[];
  count: number;
}

export interface ICanvasParams {
  take?: number;
  skip?: number;
}

/**
 * date
: 
"January 12, 1966"
desc
: 
"Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including The Riddler, The Joker, Catwoman, and The Penguin."
link
: 
"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/eJWKgqICVxgDOOWRNBQ7b6Hh5Xb.jpg"
title
: 
"Batman"
 */
export  interface ISearchMovie {
  date:string;
  desc:string;
  link: string;
  title:string;
  page:string;
}