export interface Chapter {
  number: number;
  slug: string;
  title: string;
  description: string;
  lessonCount: number;
}

export const chapters: Chapter[] = [
  { number: 1, slug: '01-basics',       title: 'Basics',               description: 'Packages, imports, functions, variables, types, and constants.',  lessonCount: 16 },
  { number: 2, slug: '02-flow-control', title: 'Flow Control',         description: 'For loops, if statements, switch, and defer.',                   lessonCount: 13 },
  { number: 3, slug: '03-more-types',   title: 'More Types',           description: 'Pointers, structs, slices, maps, and function values.',          lessonCount: 26 },
  { number: 4, slug: '04-methods',      title: 'Methods & Interfaces', description: 'Methods, interfaces, type assertions, and standard interfaces.', lessonCount: 25 },
  { number: 5, slug: '05-generics',     title: 'Generics',             description: 'Type parameters, constraints, and generic types.',               lessonCount: 2  },
  { number: 6, slug: '06-concurrency',  title: 'Concurrency',          description: 'Goroutines, channels, select, and sync.Mutex.',                 lessonCount: 10 },
];
