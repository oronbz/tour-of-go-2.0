export interface Chapter {
  number: number;
  slug: string;
  title: string;
  description: string;
  lessonCount: number;
  firstLesson: string;
}

export const chapters: Chapter[] = [
  { number: 1, slug: '01-basics',       title: 'Basics',               description: 'Packages, imports, functions, variables, types, and constants.',  lessonCount: 16, firstLesson: '01-basics/01-packages' },
  { number: 2, slug: '02-flow-control', title: 'Flow Control',         description: 'For loops, if statements, switch, and defer.',                   lessonCount: 13, firstLesson: '02-flow-control/01-for' },
  { number: 3, slug: '03-more-types',   title: 'More Types',           description: 'Pointers, structs, slices, maps, and function values.',          lessonCount: 26, firstLesson: '03-more-types/01-pointers' },
  { number: 4, slug: '04-methods',      title: 'Methods & Interfaces', description: 'Methods, interfaces, type assertions, and standard interfaces.', lessonCount: 25, firstLesson: '04-methods/01-methods' },
  { number: 5, slug: '05-generics',     title: 'Generics',             description: 'Type parameters, constraints, and generic types.',               lessonCount: 2,  firstLesson: '05-generics/01-type-parameters' },
  { number: 6, slug: '06-concurrency',  title: 'Concurrency',          description: 'Goroutines, channels, select, and sync.Mutex.',                 lessonCount: 10, firstLesson: '06-concurrency/01-goroutines' },
];
