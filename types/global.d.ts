/** Global definitions for development **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for svg loader
declare module '*.svg' {
  const image: any;
  export = image;
}
