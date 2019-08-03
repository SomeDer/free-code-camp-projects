const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
export default getQuote;

const quotes = [
  {
  quote: "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
  author: "Alan Kay"
  },
  {
    quote: "Premature optimization is the root of all evil (or at least most of it) in programming.",
    author: "Donald Knuth"
  },
  {
    quote: "Lisp has jokingly been called \"the most intelligent way to misuse a computer\". I think that description is a great compliment because it transmits the full flavor of liberation: it has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.",
    author: 'Edsger Dijkstra, CACM, 15:10'
  },
  {
    quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: 'Mark Twain'
  },
  {
    quote: "What Paul does, and does very well, is to take ideas and concepts that are beautiful in the abstract, and brings them down to a real world level. That's a rare talent to find in writing these days.",
    author: 'Jeff "hemos" Bates, Director, OSDN; Co-evolver, Slashdot'
  },
  {
    quote: "Since programmers create programs out of nothing, imagination is our only limitation. Thus, in the world of programming, the hero is the one who has great vision. Paul Graham is one of our contemporary heroes. He has the ability to embrace the vision, and to express it plainly. His works are my favorites, especially the ones describing language design.  He explains secrets of programming, languages, and human nature that can only be learned from the hacker experience. This book shows you his great vision, and tells you the truth about the nature of hacking.",
    author: 'Yukihiro "Matz" Matsumoto, creator of Ruby'
  },
  {
    quote: "To follow the path: look to the master, follow the master, walk with the master, see through the master, become the master.",
    author: 'Modern zen Poem'
  },
  {
    quote: "No problem should ever have to be solved twice.  ",
    author: 'Eric S. Raymond, How to become a hacker'
  },
  {
    quote: "Attitude is no substitute for competence.  ",
    author: 'Eric S. Raymond, How to become a hacker'
  },
  {
    quote: "It is said that the real winner is the one who lives in today but able to see tomorrow.",
    author: 'Juan Meng, Reviewing "The future of ideas" by Lawrence Lessig'
  },
  {
    quote: "Fools ignore complexity. Pragmatists suffer it. Some can avoid it.  Geniuses remove it.",
    author: 'Alan J. Perlis (Epigrams in programming)'
  },
  {
    quote: "A year spent in artificial intelligence is enough to make one believe in God.",
    author: 'Alan J. Perlis (Epigrams in programming)'
  },
  {
    quote: "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
    author: 'Alan J. Perlis (Epigrams in programmi ng)'
  },
  {
    quote: "Within a computer natural language is unnatural.  ",
    author: 'Alan J. Perlis (Epigrams in programming)'
  },
  {
    quote: "You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program.",
    author: 'Alan J. Perlis (Epigrams in programming)'
  },
  {
    quote: "Adapting old programs to fit new machines usually means adapting new machines to behave like old ones.",
    author: 'Alan J. Perlis (Epigrams in programming)'
  },
  {
    quote: "A little learning is a dangerous thing.  ",
    author: 'Alexander Pope'
  },
  {
    quote: "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    author: 'Eric Raymond'
  },
  {
    quote: "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary.",
    author: 'Frederick P. Brooks, No Sliver Bullet.'
  },
  {
    quote: "Students should be evaluated on how well they can achieve the goals they strived to achieve within a realistic context. Students need to learn to do things, not know things.",
    author: 'Roger Schank, Engines for Education'
  },
  {
    quote: "We remember what we learn when we care about performing better and when we believe that what we have been asked to do is representative of reality.",
    author: 'Roger Schank, Engines for Education'
  },
  {
    quote: "There really is no learning without doing.  ",
    author: 'Roger Schank, Engines for Education'
  },
  {
    quote: "We really have to get over the idea that some stuff is just worth knowing even if you never do anything with it. Human memories happily erase stuff that has no purpose, so why try to fill up children's heads with such stuff?",
    author: 'Roger Schank, Engines for Education'
  },
  {
    quote: "La tactique, c'est ce que vous faites quand il y a quelque chose à faire; la stratégie, c'est ce que vous faites quand il n'y a rien à faire.",
    author: 'Xavier Tartacover'
  },
  {
    quote: "The only problems we can really solve in a satisfactory manner are those that finally admit a nicely factored solution.",
    author: 'E. W. Dijkstra, The humble programmer'
  },
  {
    quote: "The best way to learn to live with our limitations is to know them.  --E. W. Dijkstra, The humble programmer This challenge, viz. the confrontation with the programming task, is so unique that this novel experience can teach us a lot about ourselves. It should deepen our understanding of the processes of design and creation, it should give us better control over the task of organizing our thoughts. If it did not do so, to my taste we should no deserve the computer at all!  It has allready taught us a few lessons, and the one I have chosen to stress in this talk is the following. We shall do a much better programming job, provided that we approach the task with a full appreciation of its tremenduous difficulty, provided that we stick to modest and elegant programming languages, provided that we respect the intrinsec limitations of the human mind and approach the task as Very Humble Programmers.",
    author: 'E. W. Dijkstra, The humble programmer'
  },
  {
    quote: "We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ...[The mathematician] need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for.",
    author: 'Hermann Weyl, The Mathematical Way of Thinking'
  },
  {
    quote: "An expert is, according to my working definition \"someone who doesn't need to look up answers to easy questions\".",
    author: 'Eric Lippert.'
  },
  {
    quote: "The programmer must seek both perfection of part and adequacy of collection.",
    author: 'Alan J. Perlis'
  },
  {
    quote: "Thus, programs must be written for people to read, and only incidentally for machines to execute.",
    author: 'Alan J. Perlis'
  },
  {
    quote: "We control complexity by building abstractions that hide details when appropriate. We control complexity by establishing conventional interfaces that enable us to construct systems by combining standard, well-understood pieces in a ``mix and match'' way. We control complexity by establishing new languages for describing a design, each of which emphasizes particular aspects of the design and deemphasizes others.",
    author: 'Alan J. Perlis'
  },
  {
    quote: "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.",
    author: 'John Locke, An Essay Concerning Human Understanding (1690)'
  },
  {
    quote: "Lisp programmers know the value of everything but the cost of nothing.  ",
    author: 'Alan J. Perlis'
  },
  {
    quote: "An interpreter raises the machine to the level of the user program; a compiler lowers the user program to the level of the machine language.",
    author: 'SICP'
  },
  {
    quote: "Everything should be made as simple as possible, but no simpler.  ",
    author: 'Albert Einstein'
  },
  {
    quote: "The great dividing line between success and failure can be expressed in five words: \"I did not have time.\"",
    author: 'WestHost weekly newsletter 14 Feb 2003'
  },
  {
    quote: "When your enemy is making a very serious mistake, don't be impolite and disturb him.",
    author: 'Napoleon Bonaparte (allegedly)'
  },
  {
    quote: "A charlatan makes obscure what is clear; a thinker makes clear what is obscure.",
    author: 'Hugh Kingsmill'
  },
  {
    quote: "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    author: 'C. A. R. Hoare'
  },
  {
    quote: "And if you go too far up, abstraction-wise, you run out of oxygen.  Sometimes smart thinkers just don't know when to stop, and they create these absurd, all-encompassing, high-level pictures of the universe that are all good and fine, but don't actually mean anything at all.",
    author: 'Joel Spolsky		'
  },
  {
    quote: "The three chief virtues of a programmer are: Laziness, Impatience and Hubris.",
    author: 'Larry Wall (Programming Perl)'
  },
  {
    quote: "All non-trivial abstractions, to some degree, are leaky.  ",
    author: 'Joel Spolsky (The Law of Leaky Abstractions)'
  },
  {
    quote: "XML wasn't designed to be edited by humans on a regular basis.  ",
    author: 'Guido van Rossum'
  },
  {
    quote: "Premature abstraction is an equally grevious sin as premature optimization.",
    author: 'Keith Devens'
  },
  {
    quote: "You can have premature generalization as well as premature optimization.  ",
    author: 'Bjarne Stroustrup'
  },
  {
    quote: "He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.",
    author: 'Matthew 5:45'
  },
  {
    quote: "A language that doesn't affect the way you think about programming, is not worth knowing.",
    author: 'Alan Perlis'
  },
  {
    quote: "Je n'ai fait celle-ci plus longue que parce que je n'ai pas eu le loisir de la faire plus courte. (I have made this letter so long only because I did not have the leisure to make it shorter.)",
    author: 'Blaise Pascal (Lettres Provinciales)'
  },
  {
    quote: "Men never do evil so completely and cheerfully as when they do it from religious conviction.",
    author: 'Blaise Pascal (attributed)'
  },
  {
    quote: "Everybody makes their own fun. If you don't make it yourself, it ain't fun -- it's entertainment.",
    author: 'David Mamet (as relayed by Joss Whedon)'
  },
  {
    quote: "If we wish to count lines of code, we should not regard them as *lines produced* but as *lines spent*.",
    author: 'Edsger Dijkstra		'
  },
  {
    quote: "Sometimes a man with too broad a perspective reveals himself as having no real perspective at all. A man who tries too hard to see every side may be a man who is trying to avoid choosing any side. A man who tries too hard to seek a deeper truth may be trying to hide from the truth he already knows.  That is not a sign of intellectual sophistication and \"great thinking\". It is a demonstration of moral degeneracy and cowardice.",
    author: 'Steven Den Beste'
  },
  {
    quote: "Omit needless words.  ",
    author: 'William Strunk, Jr. (The Elements of Style)'
  },
  {
    quote: "I have never met a man so ignorant that I couldn't learn something from him.",
    author: 'Galileo Galilei'
  },
  {
    quote: "A society that puts equality -- in the sense of equality of outcome -- ahead of freedom will end up with neither equality nor freedom. The use of force to achieve equality will destroy freedom, and the force, introduced for good purposes, will end up in the hands of people who use it to promote their own interests.",
    author: 'Milton Friedman (Thomas Sowell: A Conflict of Visions, p130)'
  },
  {
    quote: "Philosophy: the finding of bad reasons for what one believes by instinct.",
    author: 'Brave New World (paraphrased)'
  },
  {
    quote: "Of all tyrannies a tyranny sincerely exercised for the good of its victims may be the most oppressive. It may be better to live under robber barons than under omnipotent moral busybodies, The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for own good will torment us without end, for they do so with the approval of their own conscience.",
    author: 'C.S. Lewis'
  },
  {
    quote: "Fools! Don't they know that tears are a woman's most effective weapon?  ",
    author: 'Catwoman (The Batman TV Series, episode 83)'
  },
  {
    quote: "C++ is history repeated as tragedy. Java is history repeated as farce.  ",
    author: 'Scott McKay'
  },
  {
    quote: "Simplicity takes effort-- genius, even.  ",
    author: 'Paul Graham'
  },
  {
    quote: "Show, don't tell.  ",
    author: 'unknown'
  },
  {
    quote: "In God I trust; I will not be afraid. What can mortal man do to me?  ",
    author: 'David (Psalm 56:4)'
  },
  {
    quote: "Linux is only free if your time has no value.  ",
    author: 'Jamie Zawinski'
  },
  {
    quote: "Code is poetry.  ",
    author: 'wordpress.org'
  },
  {
    quote: "If you choose not to decide, you still have made a choice.  ",
    author: 'Rush (Freewill)'
  },
  {
    quote: "Civilization advances by extending the number of important operations which we can perform without thinking about them.",
    author: 'Alfred North Whitehead (Introduction to Mathematics)		'
  },
  {
    quote: "The function of wisdom is to discriminate between good and evil.  ",
    author: 'Cicero'
  },
  {
    quote: "The reason to do animation is caricature. Good caricature picks out the essense of the statement and removes everything else. It's not simply about reproducing reality; It's about bumping it up.",
    author: 'Brad Bird, writer and director, The Incredibles'
  },
  {
    quote: "Mistakes were made.  ",
    author: 'Ronald Reagan'
  },
  {
    quote: "I would rather be an optimist and be wrong than a pessimist who proves to be right. The former sometimes wins, but never the latter.",
    author: '"Hoots"'
  },
  {
    quote: "What is truth?  ",
    author: 'Pontius Pilate'
  },
  {
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    author: 'Ferris Bueller'
  },
  {
    quote: "Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.",
    author: 'Eric S. Raymond'
  },
  {
    quote: "Any sufficiently complicated C or Fortran program contains an ad hoc, informally specified, bug-ridden, slow implementation of half of Common Lisp.",
    author: "Philip Greenspun (Greenspun's Tenth Rule)"
  },
  {
    quote: "I was talking recently to a friend who teaches at MIT. His field is hot now and every year he is inundated by applications from would-be graduate students. \"A lot of them seem smart,\" he said. \"What I can't tell is whether they have any kind of taste.\"",
    author: 'Paul Graham'
  },
  {
    quote: "The direct pursuit of happiness is a recipe for an unhappy life.  ",
    author: 'Donald Campbell'
  },
  {
    quote: "It's no trick for talented people to be interesting, but it's a gift to be interested. We want an organization filled with interested people.",
    author: 'Randy S. Nelson (dean of Pixar University)'
  },
  {
    quote: "Why teach drawing to accountants? Because drawing class doesn't just teach people to draw. It teaches them to be more observant. There's no company on earth that wouldn't benefit from having people become more observant.",
    author: 'Randy S. Nelson (dean of Pixar University)'
  },
  {
    quote: "All problems in computer science can be solved by another level of indirection.",
    author: 'Butler Lampson	'
  },
  {
    quote: "A designer knows he has arrived at perfection not when there is no longuer anything to add, but when there is no longuer anything to take away.",
    author: 'Antoine de St Exupery.'
  },
  {
    quote: "For the things we have to learn before we can do them, we learn by doing them.",
    author: 'Aristotle.'
  },
  {
    quote: "There are many ways to avoid success in life, but the most sure-fire just might be procrastination.",
    author: 'Hara Estroff Marano.'
  },
  {
    quote: "PI seconds is a nanocentury.  ",
    author: '[fact]'
  },
  {
    quote: "A non negative binary integer value x is a power of 2 iff (x & (x-1)) is 0 using 2's complement arithmetic.",
    author: '[fact]'
  },
  {
    quote: "While I’ve always appreciated beautiful code, I share Jonathan’s concern about studying it too much. I think studying beauty in music and painting has led us to modern classical music and painting that the majority of us just don’t get. Beauty can be seen when it emerges, but isn’t something to strive for in isolation of a larger context. In the software world, the larger context would be the utility of the software to the end user.",
    author: '[A comment on a blog]'
  },
  {
    quote: "Dont give users the opportunity to lock themselves.  ",
    author: 'unknown'
  },
  {
    quote: "Any fool can make the simple complex, only a smart person can make the complex simple.",
    author: 'unknown'
  },
  {
    quote: "To do something well you have to love it. So to the extent you can preserve hacking as something you love, you're likely to do it well. Try to keep the sense of wonder you had about programming at age 14. If you're worried that your current job is rotting your brain, it probably is.",
    author: 'Paul Graham.'
  },
  {
    quote: "- If you give him a penny for his thoughts, you'd get change.  - Not the sharpest knife in the drawer.  - A prime candidate for natural deselection.",
    author: '[Ideas for flamewars]'
  },
  {
    quote: "What I didn't understand was that the value of some new acquisition wasn't the difference between its retail price and what I paid for it.  It was the value I derived from it. Stuff is an extremely illiquid asset. Unless you have some plan for selling that valuable thing you got so cheaply, what difference does it make what it's \"worth?\" The only way you're ever going to extract any value from it is to use it. And if you don't have any immediate use for it, you probably never will.",
    author: 'Paul Graham'
  },
  {
    quote: "Only bad designers blame their failings on the users.  ",
    author: 'unknown'
  },
  {
    quote: "Humans aren't rational -- they rationalize. And I don't just mean \"some of them\" or \"other people\". I'm talking about everyone. We have a \"logic engine\" in our brains, but for the most part, it's not the one in the driver's seat -- instead it operates after the fact, generating rationalizations and excuses for our behavior.",
    author: 'Paul Buchheit'
  },
  {
    quote: "What do Americans look for in a car? I've heard many answers when I've asked this question. The answers include excellent safety ratings, great gas mileage, handling, and cornering ability, among others. I don't believe any of these. That's because the first principle of the Culture Code is that the only effective way to understand what people truly mean is to ignore what they say. This is not to suggest that people intentionally lie or misrepresent themselves. What it means is that, when asked direct questions about their interests and preferences, people tend to give answers they believe the questioner wants to hear.  Again, this is not because they intend to mislead. It is because people respond to these questions with their cortexes, the parts of their brains that control intelligence rather than emotion or instinct. They ponder a question, they process a question, and when they deliver an answer, it is the product of deliberation. They believe they are telling the truth. A lie detector would confirm this. In most cases, however, they aren't saying what they mean.",
    author: 'The culture code.'
  },
  {
    quote: "When all you have is a hammer, everything looks like a nail.  ",
    author: 'unknown'
  },
  {
    quote: "Good coders code, great reuse.  ",
    author: 'http://www.catonmat.net'
  },
  {
    quote: "The lesson of the story might appear to be that self-interested and ambitious people in power are often the cause of wastefulness in developing countries. But self-interested and ambitious people are in positions of power, great and small, all over the world. In many places, they are restrained by the law, the press, and democratic opposition.  Cameroon's tragedy is that there is nothing to hold self-interest in check.",
    author: 'Tim Harford'
  },
  {
    quote: "To solve your problems you must learn new skills, adapt new thought patterns, and become a different person than you were before that problem.  God has crafted you for success. In the middle of every adversity lie your best opportunities. Discover it, build upon it and move forward in your journey to live an extraordinary life.  You owe it to yourself to live a great life. Don’t let negative thoughts pull you down. Be grateful and open to learn and grow.",
    author: 'http://secretsofstudying.com/'
  },
  {
    quote: "If there is a will, there is a way.  ",
    author: 'unknown'
  },
  {
    quote: "Having large case statements in an object-oriented language is a sure sign your design is flawed.",
    author: "[Fixing architecture flaws in Rails' ORM]"
  },
  {
    quote: "Being a programmer is the same way. The only way to be a good programmer is to write code. When you realize you haven't been writing much code lately, and it seems like all you do is brag about code you wrote in the past, and people start looking at you funny while you're shooting your mouth off, realize it's because they know. They might not even know they know, but they know. So, yes, doing what you love brings success, and by all means, throw yourself a nice big party, buy yourself a nice car, soak up the adulation of an adoring crowd. Then shut the fuck up and get back to work.",
    author: 'Sincerity Theory'
  },
  {
    quote: "Another feature about this guy is his low threshold of boredom. He'll pick up on a task and work frantically at it, accomplishing wonders in a short time and then get bored and drop it before its properly finished.  He'll do nothing but strum his guitar and lie around in bed for several days after.  Thats also part of the pattern too; periods of frenetic activity followed by periods of melancholia, withdrawal and inactivity.  This is a bipolar personality.",
    author: 'The bipolar lisp programmer'
  },
  {
    quote: "My dream is that people adopt it on its own merits. We're not trying to bend Ruby on Rails to fit the enterprise, we're encouraging enterprises to bend to Ruby on Rails. Come if you like it, stay away if you don't.  We're not going head over heels to accommodate the enterprise or to lure them away from Java. That's how you end up with Java, if you start bending to special interest groups.",
    author: "David Heinemeier Hansson (Ruby On Rails' creator)"
  },
  {
    quote: "New eyes have X-ray vision.  [someone that hasn't written it is more likely to spot the bug. \"someone\" can be you after a break]",
    author: 'William S. Annis'
  },
  {
    quote: "So - what are the most important problems in software engineering? I’d answer “dealing with complexity”.",
    author: 'Mark Chu-Carroll'
  },
  {
    quote: "So the mere constraint of staying in regular contact with us will push you to make things happen, because otherwise you'll be embarrassed to tell us that you haven't done anything new since the last time we talked.",
    author: 'Paul Graham (a talk at Y Combinator, for startup creators).'
  },
  {
    quote: "The choice of the university is mostly important for the piece of paper you get at the end. The education you get depends on you.",
    author: 'Andreas Zwinkau'
  },
  {
    quote: "Remember that you are humans in the first place and only after that programmers.",
    author: 'Alexandru Vancea'
  },
  {
    quote: "Humans differ from animals to the degree that they are not merely an end result of their conditioning, but are able to reflect on their experiences and strategies, and apply insight to make changes in the way they live to modify the outcome.",
    author: 'SlideTrombone (comment on "Programming can ruin your life")'
  },
  {
    quote: "As builders and creators finding the perfect solution should not be our main goal. We should find the perfect problem.",
    author: 'Isaac (blog comment)'
  },
  {
    quote: "Just like carpentry, measure twice cut once.  ",
    author: 'Super-sizing YouTube with Python (Mike Solomon, mike@youtube.com)'
  },
  {
    quote: "The good thing about reinventing the wheel is that you get a round one.  ",
    author: 'Douglas Crockford (Author of JSON and JsLint)'
  },
  {
    quote: "I feel it is everybodies obligation to reach for the best in themselves and use that for the interest of mankind.",
    author: "Corneluis (comment on 'Are you going to change the world? (Really?)')"
  },
  {
    quote: "Abstraction is a form of data compression: absolutely necessary, because human short-term memory is so small, but the critically important aspect of abstraction is the algorithm that gets you from the name back to the \"uncompressed\" details.",
    author: 'Bruce Wilder (blog post comment)'
  },
  {
    quote: "Have you ever noticed that when you sit down to write something, half the ideas that end up in it are ones you thought of while writing it?  The same thing happens with software. Working to implement one idea gives you more ideas.",
    author: 'Paul Graham, The other road ahead.'
  },
  {
    quote: "In general, we can think of data as defined by some collection of selectors and constructors, together with specified conditions that these procedures must fulfill in order to be a valid representation.",
    author: 'SICP, What is meant by data?'
  },
  {
    quote: "Resume writing is just like dating, or applying for a bank loan, in that nobody wants you if you're desperate.",
    author: 'Steve Yegge.'
  },
  {
    quote: "Mastering isn’t a survival instinct; it’s an urge to excel. Mastering is one of the experiences that delineates us from animals. It is striving to be more tomorrow than we are today; to perfectly pitch the ball over home plate; to craft the perfect sentence in an article; to open the oven and feel the warm, richly-scented cloud telling you dinner is going to be absolutely extraordinary. We humans crave perfection, to be masters of our domain, to distinguish ourselves by sheer skill and prowess.",
    author: 'Joesgoals.com'
  },
  {
    quote: "It(mastering)’s knowing what you are doing.  ",
    author: 'Joesgoals.com'
  },
  {
    quote: "Well then. How could you possibly live without automated refactoring tools? How else could you coordinate the caterpillar-like motions of all Java’s identical tiny legs, its thousands of similar parts?  I’ll tell you how: Ruby is a butterfly.",
    author: 'Stevey, Refactoring Trilogy, Part 1.'
  },
  {
    quote: "You will never become a Great Programmer until you acknowledge that you will always be a Terrible Programmer.  You will remain a Great Programmer for only as long as you acknowledge that you are still a Terrible Programmer.",
    author: 'Marc (http://kickin-the-darkness.blogspot.com/)'
  },
  {
    quote: "If I tell you I'm good, you would probably think I'm boasting. If I tell you I'm no good, you know I'm lying.",
    author: 'Bruce Lee'
  },
  {
    quote: "Let me try to get this straight: Lisp is a language for describing algorithms. This was JohnMcCarthy's original purpose, anyway: to build something more convenient than a Turing machine. Lisp is not about file, socket or GUI programming - Lisp is about expressive power. (For example, you can design multiple object systems for Lisp, in Lisp. Or implement the now-fashionable AOP. Or do arbitrary transformations on parsed source code.) If you don't value expressive power, Lisp ain't for you. I, personally, would prefer Lisp to not become mainstream: this would necessarily involve a dumbing down.",
    author: 'VladimirSlepnev'
  },
  {
    quote: "Je ne vous impose aucune contrainte, aucune limite. Surprenez-moi, étonnez-moi, défiez-moi, défiez-vous vous-même. Vous avez le choix: vous pouvez rester dans l'ombre ou en sortir en étant parmis les trop rares exceptions à avoir réussi. L'heure est venue d'aller bien au delà de votre potentiel. L'heure est venue maintenant de descendre vraiment en vous. L'heure est venue de démontrer pourquoi vous êtes l'élite, les quelques élus, les rares lueurs qui offrent à cette compagnie son caractère exceptionnel, sa luminescence.",
    author: 'Le PDG de NURV, dans "Anti-trust".'
  },
  {
    quote: "If something isn’t working, you need to look back and figure out what got you excited in the first place.",
    author: 'David Gorman (ImThere.com)'
  },
  {
    quote: "Opportunities that present themselves to you are the consequence -- at least partially -- of being in the right place at the right time. They tend to present themselves when you're not expecting it -- and often when you are engaged in other activities that would seem to preclude you from pursuing them. And they come and go quickly -- if you don't jump all over an opportunity, someone else generally will and it will vanish.",
    author: 'Marc Andreessen (http://blog.pmarca.com/)'
  },
  {
    quote: "Pay attention to opportunity cost at all times. Doing one thing means not doing other things. This is a form of risk that is very easy to ignore, to your detriment.",
    author: 'Marc Andreessen (http://blog.pmarca.com/)'
  },
  {
    quote: "Seize any opportunity, or anything that looks like opportunity. They are rare, much rarer than you think...",
    author: 'Nassim Nicholas Taleb, "The Black Swan".'
  },
  {
    quote: "I think that a lot of programmers are ignoring an important point when people talk about reducing code repetition on large projects.  Part of the idea is that large projects are intrinsically *wrong*. That you should be looking at making a number of smaller projects that are composable, even if you never end up reusing one of those smaller projects elsewhere.",
    author: 'Dan Nugent'
  },
  {
    quote: "We tend to seek easy, single-factor explanations of success. For most important things, though, success actually requires avoiding many separate causes of failure.",
    author: 'Jared Diamond'
  },
  {
    quote: "Things which matter most must never be at the mercy of things which matter least.",
    author: 'Johann Wolfgang Von Goethe (1749-1832)'
  },
  {
    quote: "I think the root of your mistake is saying that macros don't scale to larger groups. The real truth is that macros don't scale to stupider groups.",
    author: 'Paul Graham, on the Lightweight Languages mailing list.'
  },
  {
    quote: "Argue with idiots, and you become an idiot.  If you compete with slaves you become a slave.",
    author: 'Paul Graham and Norbert Weiner, respectively'
  },
  {
    quote: "Always dive down into a problem and get your hands on the deepest issue behind the problem. All other considerations are to dismissed as \"engineering details\"; they can be sorted out after the basic problem has been solved.",
    author: 'Chris Crawford'
  },
  {
    quote: "Don't have good ideas if you aren't willing to be responsible for them.  ",
    author: 'Alan Perlis'
  },
  {
    quote: "It is impossible to sharpen a pencil with a blunt axe. It is equally vain to try to do it with ten blunt axes instead. ",
    author: 'Edsger Dijkstra'
  },
  {
    quote: "If we wish to count lines of code, we should not regard them as lines produced but as lines spent.",
    author: 'Edsger Dijkstra'
  },
  {
    quote: "The most damaging phrase in the language is, It's always been done that way.",
    author: 'Rear Admiral Grace Hopper'
  },
  {
    quote: "Getting back to failing early, I've learned it's important to completely fail. Get fired. Shoot the project, then burn its corpse. Melt the CVS repository and microwave the backup CDs. When things go wrong, I've often tried to play the hero from start to finish. Guess what? Some projects are doomed no matter what. Some need skills I don't possess.  And some need a fresh face.",
    author: 'Reginald Braithwaite'
  },
  {
    quote: "The only thing a man should ever be 100% convinced of is his own ignorance.",
    author: 'DJ MacLean'
  },
  {
    quote: "The best people and organizations have the attitude of wisdom: The courage to act on what they know right now and the humility to change course when they find better evidence.  The quest for management magic and breakthrough ideas is overrated; being a master of the obvious is underrated.  Jim Maloney is right: Work is an overrated activity",
    author: 'Bob Sutton'
  },
  {
    quote: "In theory, there’s no difference between theory and practice. But in practice, there is.",
    author: 'Albert Einstein'
  },
  {
    quote: "Act from reason, and failure makes you rethink and study harder.  Act from faith, and failure makes you blame someone and push harder.",
    author:  'Erik Naggum'
  },
  {
    quote: "Measure everything you can about the product, and you'll start seeing patterns.",
    author: 'Max Levchin, PayPal founder, Talk at StartupSchool2007'
  },
  {
    quote: "Something Confusing about \"Hard\": It's tempting to think that if it's hard, then it's valuable.  Most valuable things are hard.  Most hard things are completely useless -- (picture of someone smashing their head through concrete blocks kung-fu style).  Hard DOES NOT EQUATE TO BEING valuable.  Remember Friendster back in the day?  You'd sign in, invite friends, have 25 friends, go to their profile, and then it'd show how you were connected to each one.  That's an impressive [some geeky CS jargon] Cone traversal of a tree - 100 million string comparisons per page -- it won't scale.  Used to take a minute per page to load, and Friendster died a painful death.  MySpace -- not interested in solving problems They use the shortcut of \"Miss Fitzpatrick is in your extended network\" (i.e. even when you're not even signed up for MySpace) They didn't solve the hard problem. But they make the more relevant assumption that you want to be connected to hot women. [LOL] Shows Alexa graph showing that in early 2005 Myspace took off, and quickly bypassed Friendster and never looked back.",
    author: 'Max Levchin, PayPal founder, Talk at StartupSchool2007'
  },
  {
    quote: "Quality of the people is better than the quality of the business idea.  Crappy people can screw up the best idea in the world.",
    author: 'Hadi Partovi & Ali Partovi (iLike.com), Talk at StartupSchool2007'
  },
  {
    quote: "The only constant in the world of hi-tech is change.  ",
    author: 'Mark Ward'
  },
  {
    quote: "Write it properly first. It's easier to make a correct program fast, than to make a fast program correct.",
    author: 'http://www.cpax.org.uk/prg/'
  },
  {
    quote: "J'ai toujours préféré la folie des passions à la sagesse de l'indifférence.",
    author: 'Anatole France'
  },
  {
    quote: "You can’t get to version 500 if you don’t start with a version 1.  ",
    author: 'BetterExplained.com'
  },
  {
    quote: "The wonderful and frustrating thing about understanding yourself is that nobody can do it for you.",
    author: 'BetterExplained.com'
  },
  {
    quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    author: 'Sherlock Holmes'
  },
  {
    quote: "In order to understand what another person is saying, you must assume that it is true and try to find out what it could be true of.",
    author: 'George Miller'
  },
  {
    quote: "A journey of a thousand miles must begin with a single step.  ",
    author: 'Lao­Tzu'
  },
  {
    quote: "C’s great for what it’s great for.  ",
    author: 'Ben Hoyts (micropledge)'
  },
  {
    quote: "There is one meaning [for static in C]: a global variable that is invisible outside the current scope, be it a function or a file.",
    author: 'Paolo Bonzini'
  },
  {
    quote: "Processors don't get better so that they can have more free time.  Processors get better so _you_ can have more free time.",
    author: 'LeCamarade (freeshells.ch)'
  },
  {
    quote: "The venerable master Qc Na was walking with his student, Anton.  Hoping to prompt the master into a discussion, Anton said \"Master, I have heard that objects are a very good thing - is this true?\"  Qc Na looked pityingly at his student and replied, \"Foolish pupil - objects are merely a poor man's closures.\" Chastised, Anton took his leave from his master and returned to his cell, intent on studying closures.  He carefully read the entire \"Lambda: The Ultimate...\" series of papers and its cousins, and implemented a small Scheme interpreter with a closure-based object system.  He learned much, and looked forward to informing his master of his progress.  On his next walk with Qc Na, Anton attempted to impress his master by saying \"Master, I have diligently studied the matter, and now understand that objects are truly a poor man's closures.\"  Qc Na responded by hitting Anton with his stick, saying \"When will you learn? Closures are a poor man's object.\"  At that moment, Anton became enlightened.",
    author: 'Anton van Straaten (Na = Norman Adams, Qa = Christian Queinnec)'
  },
  {
    quote: "Understanding why C++ is the way it is helps a programmer use it well. A deep understanding of a tool is essential for an expert craftsman.",
    author: 'Bjarne Stroustrap'
  },
  {
    quote: "No art, however minor, demands less than total dedication if you want to excel in it.",
    author: 'Alberti'
  },
  {
    quote: "The minute you put the blame on someone else you’ve switch things from being a problem you can control to a problem outside of your control.",
    author: 'engtech (internetducttape.com)'
  },
  {
    quote: "State is the root of all evil. In particular functions with side effects should be avoided.",
    author: 'OO Sucks (bluetail.com)'
  },
  {
    quote: "Ils ne sont pas forts parce qu'ils sont forts. Ils sont forts parce que nous sommes faibles.",
    author: 'Ragala Khalid'
  },
  {
    quote: "It is better to be quiet and thought a fool than to open your mouth and remove all doubt.",
    author: 'WikiHow'
  },
  {
    quote: "A tail call allows a function to return the result of another function without leaving an entry on the stack. Tail recursion is a specific case of tail calling.",
    author: 'ASPN : Python Cookbook : Explicit Tail Call'
  },
  {
    quote: "Simplicity means the achievement of maximum effect with minimum means.  ",
    author: 'Dr. Koichi Kawana'
  },
  {
    quote: "Normality is the route to nowhere.  ",
    author: 'Ridderstrale & Nordstorm, Funky Business'
  },
  {
    quote: "The problem is that Microsoft just has no taste. And I don't mean that in a small way, I mean that in a big way.",
    author: 'Steve Jobs'
  },
  {
    quote: "Do you want to sell sugared water all your life or do you want to change the world?",
    author: 'Steve Jobs, to John Sculley (former Pepsi executive)'
  },
  {
    quote: "1 - Creativity and innovation always build on the past.  2 - The past always tries to control the creativity that builds on it.  3 - Free societies enable the future by limiting the past.  4 - Ours is less and less a free society.",
    author: 'Lawrence Lessig, Free Culture.'
  },
  {
    quote: "Good work is no done by ‘humble’ men.  ",
    author: "H. Hardy, A mathematician's apology."
  },
  {
    quote: "Simplicity and pragmatism beat complexity and theory any day.  ",
    author: 'Dennis (blog comment)'
  },
  {
    quote: "The proof is by reductio ad absurdum, and reductio ad absurdum, which Euclid loved so much, is one of a mathematician’s finest weapons. It is a far finer gambit than any chess gambit: a chess player may offer the sacrifice of a pawn or even a piece, but a mathematician offers the game.",
    author: 'G. H. Hardy'
  },
  {
    quote: "Remember, always be yourself ... unless you suck!  ",
    author: 'Joss Whedon'
  },
  {
    quote: "All great things require great dedication.  ",
    author: 'Chuck Norris(?)'
  },
  {
    quote: "I'm always happy to trade performance for readability as long as the former isn't already scarce.",
    author: 'Crayz (Commentor on blog.raganwald.com)'
  },
  {
    quote: "You have to write for your audience. I would never write (1..5).map &'*2' in Java when I could write ListFactoryFactory.getListFactoryFromResource( new ResourceName('com.javax.magnitudes.integers').  setLowerBound(1).setUpperBound(5).setStep(1).applyFunctor( new Functor () { public void eval (x) { return x * 2; } })) I'm simplifying, of course, I've left out the security and logging wrappers.",
    author: 'Reginald Braithwait'
  },
  {
    quote: "The definition of insanity is doing the same thing over and over again and expecting different results.",
    author: 'Benjamin Franklin'
  },
  {
    quote: "A no uttered from the deepest conviction is better than a yes merely uttered to please or what is worse, to avoid trouble.",
    author: 'Mahatma Gandhi'
  },
  {
    quote: "I think it is wise, and only honest, to warn you that my goal is immodest. It is not my purpose to \"transfer knowledge\" to you that, subsequently, you can forget again. My purpose is no less than to effectuate in each of you a noticeable, irreversable change. I want you to gain, for the rest of your lives, the insight that beautiful proofs are not \"found\" by trial anf error but are the result of a consciously applied design discipline. I want you to raise your quality standards. I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself \"Dijkstra would not have liked this\", well, that would be enough immortality for me.",
    author: 'E. W. Dijkstra'
  },
  {
    quote: "The general principle for complexity design is this: Think locally, act locally.",
    author: 'Richard P. Gabriel & Ron Goldman, Mob Software: The Erotic Life of Code'
  },
  {
    quote: "Programming is the art of figuring out what you want so precisely that even a machine can do it.",
    author: "Some guy who isn't famous"
  },
  {
    quote: "Hence my urgent advice to all of you to reject the morals of the bestseller society and to find, to start with, your reward in your own fun. This is quite feasible, for the challenge of simplification is so fascinating that, if we do our job properly, we shall have the greatest fun in the world.",
    author: 'E. W. Dijkstra, On the nature of computing science.'
  },
  {
    quote: "Remember: you are alone. Every time you can get help from someone, it is an opportunity: you should eagerly size it. But then, promptly return to normal mode: you are alone and you must be prepared to solve every problem yourself.",
    author: 'Eric KEDJI'
  },
  {
    quote: "Making All Software Into Tools Reduces Risk.  ",
    author: 'smoothspan.com'
  },
  {
    quote: "Some may say Ruby is a bad rip-off of Lisp or Smalltalk, and I admit that. But it is nicer to ordinary people.",
    author: 'Matz, LL2'
  },
  {
    quote: "C and Lisp stand at opposite ends of the spectrum; they're each great at what the other one sucks at.",
    author: 'Steve Yegge, Tour de Babel.'
  },
  {
    quote: "Two people should stay together if together they are better people than they would be individually.",
    author: '?'
  },
  {
    quote: "To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.",
    author: "author unknown (quoted in `Robust Systems', Gerald Jay Suseman)"
  },
  {
    quote: "It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.",
    author: 'Edsger Dijkstra'
  },
  {
    quote: "Whatever is worth doing at all, is worth doing well.  ",
    author: 'Earl of Chesterfield'
  },
  {
    quote: "Rules of Optimization: Rule 1: Don’t do it.  Rule 2 (for experts only): Don’t do it yet.",
    author: 'M.A. Jackson'
  },
  {
    quote: "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity.",
    author: 'W.A. Wulf'
  },
  {
    quote: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",
    author: 'Donald Knuth'
  },
  {
    quote: "The best is the enemy of the good.  ",
    author: 'Voltaire'
  },
  {
    quote: "The job of a leader today is not to create followers. It’s to create more leaders.",
    author: 'Ralph Nader'
  },
  {
    quote: "The president was visiting NASA headquarters and stopped to talk to a man who was holding a mop. “And what do you do?” he asked. The man, a janitor, replied, “I’m helping to put a man on the moon, sir.”",
    author: 'The little book of leadership'
  },
  {
    quote: "Only make new mistakes.  ",
    author: 'Phil Dourado'
  },
  {
    quote: "You can recognize truth by its beauty and simplicity. When you get it right, it is obvious that it is right.",
    author: 'Richard Feynman'
  },
  {
    quote: "Talkers are no good doers.  ",
    author: 'William Shakespeare, "Henry VI"'
  },
  {
    quote: "Photography is painting with light.  ",
    author: 'Eric Hamilton'
  },
  {
    quote: "Good artists copy. Great artists steal.  ",
    author: 'Pablo Picasso'
  },
  {
    quote: "A guideline in the process of stepwise refinement should be the principle to decompose decisions as much as possible, to untangle aspects which are only seemingly interdependent, and to defer those decisions which concern details of representation as long as possible.",
    author: 'Niklaus Wirth'
  },
  {
    quote: "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all sentences short or avoid all detail and treat subjects only in outline, but that every word tell.",
    author: 'William Strunk, Jr. (The Elements of Style)'
  },
  {
    quote: "The problem is that small examples fail to convince, and large examples are too big to follow.",
    author: 'Steve Yegge.'
  },
  {
    quote: "We are the sum of our behaviours; excellence therefore is not an act but a habit.",
    author: 'Aristotle.'
  },
  {
    quote: "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.",
    author: 'Edsger Dijkstra'
  },
  {
    quote: "Every man prefers belief to the exercise of judgment.  ",
    author: 'Seneca'
  },
  {
    quote: "It’s hard to grasp abstractions if you don’t understand what they’re abstracting away from.",
    author: 'Nathan Weizenbaum'
  },
  {
    quote: "That is one of the most distinctive differences between school and the real world: there is no reward for putting in a good effort. In fact, the whole concept of a \"good effort\" is a fake idea adults invented to encourage kids. It is not found in nature.",
    author: 'Paul Graham'
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.  ",
    author: 'Thomas Jefferson'
  },
  {
    quote: "Don't stay in bed, unless you can make money in bed.  ",
    author: 'George Burns'
  },
  {
    quote: "If everything seems under control, you're not going fast enough.  ",
    author: 'Mario Andretti'
  },
  {
    quote: "Chance favors the prepared mind.  ",
    author: 'Louis Pasteur'
  },
  {
    quote: "Controlling complexity is the essence of computer programming.  ",
    author: 'Brian Kernigan'
  },
  {
    quote: "The function of good software is to make the complex appear to be simple.",
    author: 'Grady Booch'
  },
  {
    quote: "Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots.  So far the Universe is winning.",
    author: 'Rich Cook'
  },
  {
    quote: "A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year.  IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.",
    author: 'Peter Seebach'
  },
  {
    quote: "The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
    author: 'Randall E. Stross'
  },
  {
    quote: "A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.",
    author: 'Bill Gates'
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: 'Bill Gates'
  },
  {
    quote: "First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack.",
    author: 'George Carrette'
  },
  {
    quote: "To iterate is human, to recurse divine.  ",
    author: 'L. Peter Deutsch'
  },
  {
    quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    author: 'Anonymous'
  },
  {
    quote: "Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.",
    author: 'Stan Kelly-Bootle'
  },
  {
    quote: "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.",
    author: 'E.W. Dijkstra'
  },
  {
    quote: "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration.",
    author: 'E. W. Dijkstra'
  },
  {
    quote: "One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.",
    author: 'Robert Firth'
  },
  {
    quote: "Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.",
    author: 'Alanna'
  },
  {
    quote: "If Java had true garbage collection, most programs would delete themselves upon execution.",
    author: 'Robert Sewell'
  },
  {
    quote: "Software is like sex: It’s better when it’s free.  ",
    author: 'Linus Torvalds'
  },
  {
    quote: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    author: 'Eagleson’s Law'
  },
  {
    quote: "Good programmers use their brains, but good guidelines save us having to think out every case.",
    author: 'Francis Glassborow'
  },
  {
    quote: "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.",
    author: 'Bill Clinton'
  },
  {
    quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: 'Edsger W. Dijkstra'
  },
  {
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: 'Martin Golding'
  },
  {
    quote: "Everything that can be invented has been invented.  ",
    author: 'Charles H. Duell, Commissioner, U.S. Office of Patents, 1899'
  },
  {
    quote: "I think there’s a world market for about 5 computers.  ",
    author: 'Thomas J. Watson, Chairman of the Board, IBM, circa 1948'
  },
  {
    quote: "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years. ",
    author: 'John Von Neumann, circa 1949'
  },
  {
    quote: "But what is it good for?  ",
    author: 'Engineer at the Advanced Computing Systems Division of IBM,'
  },
  {
    quote: "There is no reason for any individual to have a computer in his home.  ",
    author: 'Ken Olson, President, Digital Equipment Corporation, 1977'
  },
  {
    quote: "640K ought to be enough for anybody.  ",
    author: 'Bill Gates, 1981'
  },
  {
    quote: "Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need.",
    author: 'Microsoft, on the development of Windows NT, 1992'
  },
  {
    quote: "We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.",
    author: 'Andy Pierson'
  },
  {
    quote: "If it keeps up, man will atrophy all his limbs but the push-button finger.",
    author: 'Frank Lloyd Wright'
  },
  {
    quote: "Functional programming is like describing your problem to a mathematician.  Imperative programming is like giving instructions to an idiot.",
    author: 'arcus, #scheme on Freenode'
  },
  {
    quote: "Its a shame that the students of our generation grew up with windows and mice because that tainted our mindset not to think in terms of powerful tools. Some of us are just so tainted that we will never recover.",
    author: 'Jeffrey Mark Siskind <qobi@research.nj.nec.com> in comp.lang.lisp'
  },
  {
    quote: "Lisp is a programmable programming language.  ",
    author: 'John Foderaro'
  },
  {
    quote: "I guess, when you're drunk, every woman looks beautiful and every language looks (like) a Lisp :)",
    author: 'Lament, #scheme@freenode.net'
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: 'Thomas Edison'
  },
  {
    quote: "You must always work not just within but below your means. If you can handle three elements, handle only two. If you can handle ten, then handle five. In that way the ones you do handle, you handle with more ease, more mastery and you create a feeling of strength in reserve.",
    author: 'Pablo Picasso'
  },
  {
    quote: "When you’ve got the code all ripped apart, it’s like a car that’s all disassembled. You’ve got all the parts tying all over your garage and you have to replace the broken part or the car will never run. It’s not fun until the code gets back to the baseline again.",
    author: 'Gary Kildall (inventor of CP/M, one of the first OS for the micro).'
  },
  {
    quote: "Well, if you talk about programming to a group of programmers who use the same language, they can become almost evangelistic about the language. They form a tight-knit community, hold to certain beliefs, and follow certain rules in their programming. It’s like a church with a programming language for a Bible.",
    author: 'Gary Kildall (inventor of CP/M, one of the first OS for the micro).'
  },
  {
    quote: "It’s a problem if the design doesn’t let you add features at a later date. If you have to redo a program, the hours you spend can cause you to lose your competitive edge. A flexible program demonstrates the difference between a good designer and someone who is just getting a piece of code out.",
    author: 'Gary Kildall (inventor of CP/M, one of the first OS for the micro).'
  },
  {
    quote: "[How friendly will this machine be?] Well, I don’t think it’s a matter of friendliness, because ultimately if the program is going to accomplish anything of value, it will probably be relatively complex.",
    author: 'Gary Kildall (inventor of CP/M, one of the first OS for the micro).'
  },
  {
    quote: "Some people suggest that machines would be friendlier if input could be in a natural language. But natural language is probably the worst kind of input because it can be quite ambiguous. The process of retrieving information from the computer would be so time-consuming that you would be better off spending that time getting the information directly from an expert.",
    author: 'Gary Kildall (inventor of CP/M, one of the first OS for the micro).'
  },
  {
    quote: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    author: 'Arthur C. Clarke'
  },
  {
    quote: "Any sufficiently advanced technology is undistinguishable from magic.  ",
    author: 'Arthur C. Clarke'
  },
  {
    quote: "That is the inevitable human response. We’re reluctant to believe that great discoveries are in the air. We want to believe that great discoveries are in our heads—and to each party in the multiple the presence of the other party is invariably cause for suspicion.",
    author: 'Malcolm Gladwell, Who says big ideas are rare? '
  },
  {
    quote: "Good ideas are out there for anyone with the wit and the will to find them.",
    author: 'Malcolm Gladwell, Who says big ideas are rare?'
  },
  {
    quote: "A person won't become proficient at something until he or she has done it many times. In other words., if you want someone to be really good at building a software system, he or she will have to have built 10 or more systems of that type.",
    author: 'Philip Greenspun'
  },
  {
    quote: "A person won't retain proficiency at a task unless he or she has at one time learned to perform that task very rapidly. Learning research demonstrates that the skills of people who become accurate but not fast deteriorate much sooner than the skills of people who become both accurate and fast.",
    author: 'Philip Greenspun'
  },
  {
    quote: "Training research shows that if you get speed now you can get quality later. But if you don't get speed you will never get quality in the long run.",
    author: 'Philip Greenspun'
  },
  {
    quote: "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    author: 'Donald Knuth'
  },
  {
    quote: "Wear your best for your execution and stand dignified. Your last recourse against randomness is how you act — if you can’t control outcomes, you can control the elegance of your behaviour. You will always have the last word.",
    author: 'Nassim Taleb'
  },
  {
    quote: "The human brain starts working the moment you are born and never stops until you stand up to speak in public.",
    author: 'Anonymous'
  },
  {
    quote: "The trouble with the world is that the stupid are always cocksure and the intelligent are always filled with doubt.",
    author: 'Bertrand Russell'
  },
  {
    quote: "Simple, clear purpose and principles give rise to complex, intelligent behavior. Complex rules and regulations give rise to simple, stupid behavior.",
    author: 'Dee Hock, Birth of the Chaordic Age'
  },
  {
    quote: "C++ is like teenage sex: Everybody is talking about it all the time, only few are really doing it.",
    author: 'unknown'
  },
  {
    quote: "Functional programming is to algorithms as the ubiquitous little black dress is to women's fashion.",
    author: 'Mark Tarver (of "The bipolar Lisp programmer" fame)'
  },
  {
    quote: "Java and C++ make you think that the new ideas are like the old ones.  Java is the most distressing thing to hit computing since MS-DOS.",
    author: 'Alan Kay'
  },
  {
    quote: "For complex systems, the compiler and development environment need to be in the same language that its supporting. It's the only way to grow code.",
    author: 'Alan Kay'
  },
  {
    quote: "Simple things should be simple. Complex things should be possible.  ",
    author: 'Alan Kay'
  },
  {
    quote: "I invented the term Object-Oriented, and I can tell you I did not have C++ in mind.",
    author: 'Alan Kay'
  },
  {
    quote: "All creativity is an extended form of a joke.  ",
    author: 'Alan Kay'
  },
  {
    quote: "If you don't fail at least 90 percent of the time, you're not aiming high enough.",
    author: 'Alan Kay'
  },
  {
    quote: "Revolutions come from standing on the shoulders of giants and facing in a better direction.",
    author: 'Alan Kay'
  },
  {
    quote: "Ce n’est que par les beaux sentiments qu’on parvient à la fortune !  ",
    author: 'Charles Baudelaire, Conseils aux jeunes littérateurs.'
  },
  {
    quote: "La haine est une liqueur précieuse, un poison plus cher que celui des Borgia, - car il est fait avec notre sang, notre santé, notre sommeil, et les deux tiers de notre amour! Il faut en être avare!",
    author: 'Charles Baudelaire, Conseils aux jeunes littérateurs.'
  },
  {
    quote: "L’art qui satisfait le besoin le plus impérieux sera toujours le plus honoré.",
    author: 'Charles Baudelaire, Conseils aux jeunes littérateurs.'
  },
  {
    quote: "If it looks like a duck, walks like a duck, and quacks like a duck, it's a duck.",
    author: 'Official definition of "duck typing"'
  },
  {
    quote: "In OO, it's the data that is the \"important\" thing: you define the class which contains member data, and only incidentally contains code for manipulating the object. In FP, it's the code that's important: you define a function which contains code for working with the data, and only incidentally define what the data is.",
    author: 'almkgor, on reddit'
  },
  {
    quote: "Des mots simples, quand ils sont bien utilisés, font faire à des gens ordinaires des choses extraordinaires.",
    author: 'Khaled TANGAO'
  },
  {
    quote: "It was Edison who said ‘1% inspiration, 99% perspiration’. That may have been true a hundred years ago. These days it's ‘0.01% inspiration, 99.99% perspiration’, and the inspiration is the easy part.",
    author: 'Linux Torvalds'
  },
  {
    quote: "The greatest challenge to any thinker is stating the problem in a way that will allow a solution.",
    author: 'Bertrand Russell'
  },
  {
    quote: "No matter how much you plan you’re likely to get half wrong anyway. So don’t do the ‘paralysis through analysis’ thing. That only slows progress and saps morale.",
    author: '37 Signal, Getting real'
  },
  {
    quote: "[Innovation] comes from saying no to 1,000 things to make sure we don’t get on the wrong track or try to do too much. We’re always thinking about new markets we could enter, but it’s only by saying no that you can concentrate on the things that are really important.",
    author: 'Steve Jobs'
  },
  {
    quote: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: 'Hans Hofmann'
  },
  {
    quote: "However beautiful the strategy, you should occasionally look at the results.",
    author: 'Winston Churchill'
  },
  {
    quote: "Genius is 1% inspiration and 99% perspiration.  ",
    author: 'Thomas Edison'
  },
  {
    quote: "I’d rather write programs to write programs than write programs.  ",
    author: 'Richard Sites'
  },
  {
    quote: "Heureux l'étudiant qui comme la Rivière peut suivre son cours sans quitter son lit...",
    author: 'Sebastien, sur commentcamarche.net'
  },
  {
    quote: "Side projects are less masturbatory than reading RSS, often more useful than MobileMe, more educational than the comments on Reddit, and usually more fun than listening to keynotes.",
    author: 'Chris Wanstrath'
  },
  {
    quote: ":nunmap can also be used outside of a monastery.  ",
    author: 'Vim user manual'
  },
  {
    quote: "I had to learn how to teach less, so that more could be learned.  ",
    author: 'Tim Gallwey, The inner game of work'
  },
  {
    quote: "Workers of the world, the chains that bind you are not held in place by a ruling class, a \"superior\" race, by society, the state, or a leader.  They are held in place by none other than yourself. Those who seek to exploit are not themselves free, for they place no value in freedom. Who is it that really employs you and commands you to pick up your daily load? And who is it that you allow to pass judgment on the adequacy of your toil? Who have you empowered to dangle the carrot before you and threaten with disapproval? Who, when you wake each morning, sends you off to what you call your work?  Is there an \"I want to\" behind all your \"I have to,\" or have you been so long forgotten to yourself that \"I want\" exists only as an idea in your head? If you have disconnected from your soul's desire and are drowning in an ocean of \"have to,\" then rise up and overthrow your master. Begin the journey toward emancipation.  Work only in such a way that you are truly self-employed.",
    author: 'Tim Gallwey, The inner game of work'
  },
  {
    quote: "The Work Begins Anew, The Hope Rises Again, And The Dream Lives On.  ",
    author: 'Ted Kennedy'
  },
  {
    quote: "The hardest part of design ... is keeping features out.  ",
    author: 'Donald Norman '
  },
  {
    quote: "Before software can be reusable it first has to be usable.  ",
    author: 'Ralph Johnson '
  },
  {
    quote: "The opposite of love is not hate, it is indifference.  ",
    author: 'Elie Wiesel'
  },
  {
    quote: "- Gbi de fer - Howa!  - On va en France - Non, je vais pas!  - Pourquoi?  - Parce ki y a pas agouti là-bas!",
    author: 'Gbi de fer'
  },
  {
    quote: "Ecoute, crois en ton projet... Implique toi à fond... Trouve des aspects innovants pour te distinguer des autres. Tu verras que tu te feras remarquer très facilement...",
    author: 'Khaled Tangao'
  },
  {
    quote: "Perpetual optimism is a force multiplier.  ",
    author: 'Colin Powell'
  },
  {
    quote: "Be the change you want to see in the world.  ",
    author: 'Mahatma Gandhi'
  },
  {
    quote: "The art of getting someone else to do something you want done because he wants to do it [Leadership].",
    author: 'Dwight D. Enseinhover.'
  },
  {
    quote: "No one is all evil. Everybody has a good side. If you keep waiting, it will comme up.",
    author: 'Randy Pausch'
  },
  {
    quote: "Experience is what you get when you don't get what you want.  ",
    author: 'Cited by Randy Pausch'
  },
  {
    quote: "Luck is where preparation meets opportunity.  ",
    author: 'Randy Pausch'
  },
  {
    quote: "Bonne bosse et reste le boss.  ",
    author: 'Darryl Amedon'
  },
  {
    quote: "The greatest of all weaknesses is the fear of appearing weak.  ",
    author: 'J. B. Bossuet, Politics from Holy Writ, 1709'
  },
  {
    quote: "It's easier to ask forgiveness than it is to get permission.  ",
    author: 'Rear Admiral Dr. Grace Hopper'
  },
  {
    quote: "An investment in knowledge always pays the best interest.  ",
    author: 'Benjamin Franklin'
  },
  {
    quote: "Natives who beat drums to drive off evil spirits are objects of scorn to smart Americans who blow horns to break up traffic jams.",
    author: 'Mary Ellen Kelly'
  },
  {
    quote: "A CS professor once explained recursion as follows: A child couldn't sleep, so her mother told her a story about a little frog, who couldn't sleep, so the frog's mother told her a story about a little bear, who couldn't sleep, so the bear's mother told her a story about a little weasel...  who fell asleep.  ...and the little bear fell asleep; ...and the little frog fell asleep; ...and the child fell asleep.",
    author: 'everything2.com'
  },
  {
    quote: "Never do the impossible. People will expect you to do it forever after.  ",
    author: 'pigsandfishes.com'
  },
  {
    quote: "Hire people smarter than you.  Work with people smarter than you.  Listen to them. Let them lead you. Take the blame for all failures, give away the credit for all successes.",
    author: 'How to fail: 25 secrets learned through failure'
  },
  {
    quote: "Give up control. You never really had it anyway.  ",
    author: 'How to fail: 25 secrets learned through failure'
  },
  {
    quote: "Ne te mets pas de limite, la vie se chargera de la mettre a ta place.  ",
    author: 'Darryl AMEDON'
  },
  {
    quote: "Only two things are infinite, the universe and human stupidity. And I'm not so sure about the former.",
    author: 'Albert Einstein'
  },
  {
    quote: "The important thing is not to stop questioning.  ",
    author: 'Albert Einstein'
  },
  {
    quote: "Do not accept anything because it comes from the mouth of a respected person.  ",
    author: 'Buddha'
  },
  {
    quote: "Work as intensely as you play and play as intensely as you work.  ",
    author: 'Eric S. Raymond, How To Be A Hacker'
  },
  {
    quote: "A witty saying proves nothing ",
    author: 'Voltaire'
  },
  {
    quote: "Sound methodology can empower and liberate the creative mind; it cannot inflame or inspire the drudge.",
    author: 'Frederick P. Brooks, No Sliver Bullet.'
  },
  {
    quote: "La connaissance d'un défaut ne l'enlève pas, elle nous torture jusqu'à sa correction.",
    author: 'Daniel Lovewin (Guillaume Kpotufe)'
  },
  {
    quote: "Je crois au flooding.  ",
    author: 'Karim BAINA (en parlant du dailogue avec les administrations)'
  },
  {
    quote: "Il y a très loin de la velléité à la volnt, de la volonté à la résolution, de la résolution au choix des moyens, du choix ds moyens à lapplication.",
    author: 'Jean-François Paul de Gondi de Retz'
  },
  {
    quote: "Do not spoil what you have by desiring what you have not; but remember that what you now have was once among the things only hoped for.",
    author: 'Greek philosopher Epicurus'
  },
  {
    quote: "Nobody can make you feel inferior without your consent.  ",
    author: 'Eleanor Roosevelt'
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.  ",
    author: 'Mark Twain'
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: 'Dr. Seuss'
  },
  {
    quote: "The opposite of love is not hate, it's indifference.  ",
    author: 'Elie Wiesel'
  },
  {
    quote: "Life is what happens to you while you're busy making other plans.  ",
    author: 'John Lennon'
  },
  {
    quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: 'Mark Twain'
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.  ",
    author: 'Friedrich Nietzsche'
  },
  {
    quote: "In terms of energy, it's better to make a wrong choice than none at all.  ",
    author: 'George Leonard, Mastery.'
  },
  {
    quote: "Courage is grace under pressure.  ",
    author: 'Ernest Hemingway'
  },
  {
    quote: "Actually, the essence of boredom is to be found in the obsessive search for novelty. Satisfaction lies in mindful repetition, the discovery of endless richness in subtle variations on familiar themes.",
    author: 'George Leonard, Mastery.'
  },
  {
    quote: "Before enlightenment, chop wood and carry water.  After enlightenment, chop wood and carry water.",
    author: 'Ancient Eastern adage'
  },
  {
    quote: "Acknowledging the negative doesn't mean sniveling [whining, complaining]; it means facing the truth and then moving on.",
    author: 'George Leonard, Mastery.'
  },
  {
    quote: "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    author: 'Goethe'
  },
  {
    quote: "What we choose to fight is so tiny!  What fights us is so great!  ...  When we win it's with small things, and the triumph itself makes us small.  ...  Winning does not tempt that man.  This is how he grows: by being defeated, decisively, by constantly greater beings. ",
    author: 'Rainer Maria Rilke, The Man Watching.'
  },
  {
    quote: "We fail to realize that mastery is not about perfection. It's about a process, a journey. The master is the one who stays on the path day after day, year after year. The master is the one who is willing to try, and fail, and try again, for as long as he or she lives.",
    author: 'George Leonard, Mastery.'
  },
  {
    quote: "Are you willing to wear your white belt?  ",
    author: 'George Leonard, Mastery.'
  }
 ];