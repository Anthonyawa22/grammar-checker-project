//    Grammar Checker


let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// create a variable named count that stores the number 0
let count = 0;
//Directly below count, use a .forEach() method to iterate over the storyWords array
storyWords.forEach(word =>{
 count++; //Add a parameter named word to the callback function of the .forEach() method to be used to store the current element when iterating over the storyWords array. Each time storyWord iterates, increment count by one.
});
//console.log(count);

// Below where you logged the count variable, reassign the storyWords variable to equal the invocation of the .filter() method on the storyWords array. Give the .filter() method a callback function with a parameter of word
storyWords = storyWords.filter(word =>{
   return word !== unnecessaryWord; // Within the filter() method’s callback function body, return word only if it is NOT equal to unnecessaryWord.  
});
//created a storyWord variable to replace the storyword with 'beautiful' in misspelledWord varible  by return beautiful using the itenary condition statemen
storyWords = storyWords.map(word =>{
  return word === misspelledWord ? 'beautiful'  :  word ;  
 });
// create a varible to find the index of the badWord varible created on line 6
 let badWordIndex = storyWords.findIndex(word =>{
  return word === badWord;
 })
 storyWords[78] = 'really';
 //console.log(badWordIndex);
 let lengthCheck = storyWords.every(word =>{
  return word.length <= 10;
 })
 //console.log(lengthCheck);
//find the word that is more than 10 character
 let findWord = storyWords.filter(word =>{
  return word.length > 10;
 })
//console.log(findWord);
//create a new varaible and = to breaktaking
let newFoundWord = 'breathtaking';
//create a variable that return the index of breaktaking
let replaceNewFoundWord = storyWords.findIndex(word =>{
  return word === newFoundWord;
})
//access the breaktaking index and assign a new value 'dazzling'
storyWords[111] = 'dazzling';
//log replaceNewFoundWord to the console. 
//console.log(replaceNewFoundWord);


//console.log(storyWords);
console.log(storyWords.join(' '));
