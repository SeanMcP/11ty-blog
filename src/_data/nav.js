const LINKS = {
  articles: {
    description: "Read articles about programming",
    label: "Articles",
    url: "/articles/",
  },
  notes: {
    description: "A feed of short notes, thoughts, or ideas",
    label: "Notes",
    url: "/notes/",
  },
  talks: {
    description: "Outlines of talks I've given and workshops I've lead",
    label: "Talks",
    url: "/talks/",
  },
  bookshelf: {
    description: "Books that I have read and some notes on them",
    label: "Bookshelf",
    url: "/bookshelf/",
  },
  about: {
    description: "Learn more about me and my work",
    label: "About",
    url: "/about/",
  },
};

module.exports = {
  primary: [LINKS.articles, LINKS.about],
  secondary: [
    LINKS.articles,
    LINKS.notes,
    LINKS.talks,
    LINKS.bookshelf,
    LINKS.about,
  ],
};
