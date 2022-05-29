const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel suscipit lorem. Donec sagittis risus in euismod pulvinar. Fusce nisi nunc, venenatis at ex vitae, malesuada bibendum arcu. Morbi varius urna lectus, id aliquet nunc euismod ornare. Maecenas hendrerit tempor odio, semper varius tellus. Proin tincidunt lacus a sapien tempor, quis vulputate leo porttitor. Aliquam non placerat ipsum. Ut vestibulum risus faucibus, ultrices enim venenatis, varius nulla. Etiam a ante convallis, cursus nulla eget, varius magna. Praesent pretium pretium metus eu rhoncus. Pellentesque ex ante, dapibus id tellus vel, ullamcorper vulputate nulla. Praesent congue semper nibh, viverra sagittis risus suscipit in. Fusce blandit sapien vel lorem congue, nec efficitur ex mollis. Nullam nec lorem in lectus malesuada facilisis ac eget arcu. Integer vel vulputate dui. Curabitur mattis interdum est at feugiat.

Fusce ullamcorper leo eget ipsum auctor egestas. Sed vel dapibus urna, nec volutpat elit. Maecenas quis libero sed felis hendrerit luctus. Integer eleifend egestas purus non rutrum. Fusce sollicitudin eget nunc in iaculis. Praesent gravida nisi nec posuere semper. Integer id lobortis quam, eget consequat mi. In eu risus sit amet tortor ullamcorper egestas nec ut augue.

Praesent placerat hendrerit lectus. Quisque posuere lacinia quam placerat scelerisque. Integer libero metus, sodales vel lorem ac, placerat sollicitudin sem. Integer eros enim, commodo sed diam nec, aliquet viverra massa. In eget neque non ligula sagittis ornare. Curabitur ut quam vitae risus consectetur suscipit ac non elit. Integer dolor tortor, hendrerit et ipsum at, venenatis tempor neque. Aenean malesuada, enim sit amet fermentum dictum, quam ante euismod elit, non vulputate tellus tellus sit amet ligula. Nunc sagittis lorem vel porttitor sagittis. Pellentesque pretium eros nisi, non posuere odio euismod vitae. Aliquam erat volutpat. Sed ultricies elementum massa nec egestas.

Praesent metus lectus, dictum id leo vel, faucibus tincidunt odio. Suspendisse consectetur velit metus, sit amet viverra magna porttitor at. Sed feugiat est felis, ut fringilla tortor lobortis eu. In id mollis ipsum. Nullam ultricies accumsan luctus. Fusce in orci convallis nunc lacinia tempus. Maecenas pretium sapien sit amet magna viverra, et feugiat erat maximus. In vestibulum augue eu ante feugiat, non convallis felis semper.

Phasellus in sapien hendrerit, dapibus sapien quis, porta ligula. Nam consequat, orci nec lacinia vulputate, lectus lacus convallis libero, posuere dapibus purus quam sed eros. Donec nec sem est. Praesent egestas lorem sit amet turpis pellentesque, eget tempor dolor dignissim. Fusce ornare mi a enim molestie vulputate. Sed imperdiet lobortis sapien, a dapibus libero pulvinar euismod. Integer sit amet erat ac massa efficitur fermentum blandit quis tellus. Duis gravida nunc eu ipsum facilisis, a pulvinar arcu lacinia. In vel justo in dolor aliquam euismod consectetur a nibh. Morbi dolor arcu, pharetra sit amet nisi id, mattis dignissim nibh.
`.trim();

export const allThreads = {
  js: [
    {
      id: 0,
      title: 'Food',
      text: loremIpsum
    },
    {
      id: 1,
      title: 'God',
      text: loremIpsum
    },
    {
      id: 2,
      title: 'God',
      text: loremIpsum
    }
  ],
  py: [
    
    {
      id: 0,
      title: 'Food',
      text: loremIpsum
    },
    {
      id: 1,
      title: 'God',
      text: loremIpsum
    },
    {
      id: 2,
      title: 'Samosa',
      text: loremIpsum
    },
    {
      id: 3,
      title: 'Chutney',
      text: loremIpsum
    },
    {
      id: 4,
      title: 'Rossogulla',
      text: loremIpsum
    }
  ],
  math: []
};

export const all = [
  {
    id: 'js',
    name: 'JavaScript',
    desc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. Also, I won't lie, it is my favourite language too.",
    threads: allThreads.js.length
  },
  {
    id: 'py',
    name: 'Python',
    desc: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.",
    threads: allThreads.py.length
  },
  {
    id: 'math',
    name: 'Mathematics',
    desc: "Mathematics is an area of knowledge that includes such topics as numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
    threads: allThreads.math.length
  }
];