/* eslint-disable  func-names */
/* eslint-disable  no-console */

//const main = require('./main.json');
const Alexa = require('ask-sdk-core');

const data = [

  "Mister Rogers always mentioned out loud that he was feeding his fish because a young blind viewer once asked him to do so. She wanted to know the fish were OK.",
  "Boring, Oregon and Dull, Scotland have been sister cities since 2012. In 2017, they added Bland Shire, Australia to their \"League of Extraordinary Communities.\"",
  "Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event, commandeered an airplane, and went on a joyride to Baltimore.",
  "If you have the feeling you’ve experienced an event before in real life, call it déjà vu. If you feel like you’ve previously experienced an event in a dream instead, there’s a different term for it: déjà rêvé.",
  "During Prohibition, moonshiners would wear \"cow shoes.\" The fancy footwear left hoofprints instead of footprints, helping distillers and smugglers evade police.",
  "Since founding the Imagination Library in 1995, Dolly Parton has donated 100 million books to children.",
  "The 100 folds in a chef's toque are said to represent 100 ways to cook an egg.",
  "In curling, good sportsmanship and politeness are essential. Congratulating opponents and abstaining from trash talk are part of what's known as the \"Spirit of Curling.\"",
  "In 1974, the Journal of Applied Behavior Analysis published a paper titled \"The Unsuccessful Self-Treatment of a Case of 'Writer's Block.'\" It contained a total of zero words.",
  "Guinness estimates that 93,000 liters of beer are lost in facial hair each year in the UK alone.",
  "George Washington served an eggnog-like drink to visitors at Mount Vernon. His recipe included rye whiskey, rum, and sherry.",
  "Some cats are allergic to humans.",
  "Queen Elizabeth II is a trained mechanic.",
  "Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.",
  "Tsundoku is the act of acquiring books and not reading them.",
  "Ravens in captivity can learn to talk better than parrots.",
  "Bela Lugosi was buried in full Dracula costume—cape and all.",
  "Central Park's lampposts contain a set of four numbers that can help you navigate. The first two tell you the nearest street, and the next two tell you whether you're closer to the east or west side of the park (even numbers signal east, odd signals west).",
  "A teacher wrote of a young Roald Dahl on his school report card: I have never met anybody who so persistently writes words meaning the exact opposite of what is intended.",
  "You can still visit Blockbuster stores in Alaska and Oregon.",
  "Blood donors in Sweden receive a thank you text when their blood is used.",
  "Kea parrots warble together when they're in a good mood, making them the first known non-mammal species to communicate with infectious laughter.",
  "Long before rap battles, there was \"flyting\": the exchange of witty, insulting verses. The verbal throwdowns were popular in England and Scotland from the 5th to 16th centuries.",
  "Melbourne gave some of its trees email addresses so residents could report problems. Instead, the trees received love letters.",
  "An estimated 1 million dogs in the U.S. have been named primary beneficiary in their owners' wills.",
  "At Petrified Forest National Park, visitors sometimes break the rules (and the law) by taking rocks home with them. According to rangers, they often end up returning the stolen goods in the mail—along with an apology note.",
  "The Russians showed up 12 days late to the 1908 Olympics in London because they were using the Julian calendar instead of the Gregorian calendar.",
  "Maya Angelou was the first black female streetcar conductor in San Francisco.",
  "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
  "J.K. Simmons has been the voice of the Yellow Peanut M&M since the late 1990s.",
  "Count von Count's love of numbers isn't just a quirky character trait—in traditional vampire folklore, the bloodsuckers have arithmomania, a compulsion to count.",
  "In Great Britain and Japan, black cats are perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck—particularly for single women.",
  "Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.",
  "During World War I, a Canadian soldier made a black bear his pet and named her Winnipeg. “Winnie” was later a resident of the London Zoological Gardens where she was an adored attraction, especially to a boy named Christopher Robin, son of author A.A. Milne. The boy even named his teddy bear after her.",
  "Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.",
  "Neil Armstrong's astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.",
  "Due to the restaurant's reputation for staying open in extreme weather, the so-called “Waffle House Index” is informally used by FEMA to gauge storm severity.",
  "The first sales pitch for the Nerf ball was “Nerf: You can’t hurt babies or old people!”",
  "The manchineel tree is nicknamed the \"Tree of Death\" for good reason: Touching it can leave chemical burns on your skin, its fruit is toxic, and its bark—when burned—can cause blindness.",
  "If drivers adhere to the 45 mph speed limit on a stretch of Route 66 in New Mexico, the road's rumble strips will play a rendition of \"America the Beautiful.\"",
  "Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.",
  "Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.",
  "Before settling on the Seven Dwarfs we know today, Disney considered Chesty, Tubby, Burpy, Deafy, Hickey, Wheezy, and Awful.",
  "The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.",
  "In 1997 a Louisville woman left actor Charles Bronson all of her money in a handwritten will—a total of about $300,000. She'd never met him; she was just a fan.",
  "Carly Simon's dad is the Simon of Simon and Schuster. He co-founded the company.",
  "Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)",
  "After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.",
  "At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.",
  "Tootsie Rolls were added to soldiers' rations in World War II for their durability in all weather conditions.",
  "When Canada's Northwest Territories considered renaming itself in the 1990s, one name that gained support was \"Bob.\"",
  "After OutKast sang \"Shake it like a Polaroid picture,\" Polaroid released a statement: \"Shaking or waving can actually damage the image.\"",
  "Marie Curie remains the only person to earn Nobel prizes in two different sciences.",
  "The Starry Night depicts Vincent van Gogh's view from the Saint-Paul de Mausole asylum.",
  "The ampersand symbol is formed from the letters in et—the Latin word for \"and.\"",
  "Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive \"death spirals.\"",
  "A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.",
  "Wendy's founder Dave Thomas dropped out of high school but earned his GED in 1993. His GED class voted him Most Likely to Succeed.",
  "Both John Adams and Thomas Jefferson died on July 4, 1826—exactly 50 years after the adoption of the Declaration of Independence.",
  "Dogs are capable of understanding up to 250 words and gestures. The average dog is as intelligent as a two-year-old child.",
  "Bubbles keep your bath water warmer longer.",
  "Scientists have found evidence of take-out restaurants in the remains of Pompeii.",
  "Fried chicken was brought to America by Scottish immigrants.",
  "Peter Durand patented the tin can in 1810. Ezra Warner patented a can opener in 1858. In between, people used chisels and hammers.",
  "There are 71 streets in Atlanta with \"Peachtree\" in their name.",
  "Goats have rectangular pupils.",
  "The bend in a flamingo's leg isn't a knee—it's an ankle.",
  "In 1946, Boston owner Walter Brown chose the nickname Celtics over Whirlwinds, Olympians, and Unicorns.",
  "After It's the Great Pumpkin, Charlie Brown aired, Charles Schulz was overwhelmed with candy shipments sent from kids who were concerned for Charlie, who got rocks instead of treats in his Halloween sack.",
  "One of the world's largest stockpiles of nuclear weapons—a U.S. Navy base near Seattle—is partially defended by trained dolphins.",
  "It's illegal for supermarkets in France to waste food. Supermarkets must either compost it or donate unsold or nearly expired goods to charity.",
  "Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.",
  "A new baby can cost new parents 750 hours of sleep in the first year.",
  "In 1965, a Senate subcommittee predicted that by 2000, Americans would only be working 20 hours a week with seven weeks vacation.",
  "For one day in 1998, Topeka, Kansas, renamed itself \"ToPikachu\" to mark Pokemon's U.S. debut.",
  "Truman Capote said he was the only person who'd met John F. Kennedy, Bobby Kennedy, Lee Harvey Oswald, and Sirhan Sirhan.",
  "Susan B. Anthony was fined $100 for voting in the 1872 election. She never paid the fine.",
  "Canned pumpkin isn't actually pumpkin. Even purees that advertise as \"100 percent pumpkin\" are actually made of a range of different winter squashes.",
  "When Gene Wilder accepted the role of Willy Wonka, he had one condition: In his first appearance, Wilder wanted Wonka to limp toward the crowd with a cane in hand before falling into a perfect somersault and jumping back up. The reason? “Because from that time on, no one will know if I’m lying or telling the truth.”",
  "Dr. Seuss said he expected to spend \"a week or so\" writing The Cat in the Hat. It actually took a year and a half.",
  "The Reese in Reese's Peanut Butter Cups is Harry Burnett Reese, a former Hershey employee who created his famous candy in the 1920s.",
  "The plural of cul-de-sac is culs-de-sac.",
  "Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.",
  "At the Gettysburg reunion in 1913, two men purchased a hatchet, walked to the site where their regiments had fought, and buried it.",
  "\"Bloodcurdling\" isn't just an expression: Research shows that watching horror movies can increase a certain clotting protein in our bloodstreams.",
  "An episode of Peppa Pig was pulled from Australian television for teaching children not to fear spiders.",
  "A group of pugs is called a grumble.",
  "Before he wrote Goosebumps, R.L. Stine wrote the jokes for Bazooka Joe wrappers.",
  "In 1998, the U.S. Army tried developing a telepathic ray gun \"where words could be transmitted to be heard like the spoken word, except that it could only be heard within a person’s head.\"",
  "In 1967, the Nigerian Civil War ground to a halt for two days because both sides wanted to watch Pelé play in an exhibition soccer match.",
  "Winston Churchill's mother was born in Brooklyn.",
  "Jim Cummings is the voice of Winnie the Pooh. He calls sick kids in hospitals and chats with them in character.",
  "Before Google launched Gmail, \"G-Mail\" was the name of a free email service offered by Garfield's website.",
  "Before the Nazis invaded Paris, H.A. and Margret Rey fled on bicycles. They were carrying the manuscript for Curious George.",
  "In colonial America, lobster wasn't exactly a delicacy. It was so cheap and plentiful it was often served to prisoners.",
  "Crayola means \"oily chalk.\" The name combines craie (French for \"chalk\") and ola (short for \"oleaginous,\" or \"oily\").",
  "Truman Show Delusion is a mental condition marked by a patient's belief that he or she is the star of an imaginary reality show.",
  "Cookie Monster is not changing his name. In a 2012 episode he said, \"We've got to stop this Veggie Monster rumor before me reputation ruined.\"",
  "Google's founders were willing to sell to Excite for under $1 million in 1999—but Excite turned them down.",
  "The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.",
  "Although Dr. James Naismith invented basketball, he’s the only Kansas Jayhawks basketball coach with a losing record.",
  "Wisconsin is the Badger State because the area's lead miners used to spend winters in tunnels burrowed into hills. Like badgers.",
  "In 1999, the U.S. government paid the Zapruder family $16 million for the film of JFK's assassination.",
  "Before he became president, Abraham Lincoln was wrestling champion of his county. He fought in nearly 300 matches and lost only one.",
  "How many licks does it take to get to the center of a Tootsie Pop? The world may never know. But on average, a Licking Machine made at Purdue needed 364.",
  "Barcelona is home to hundreds of playgrounds for seniors. The spaces are meant to promote fitness and combat loneliness in elderly citizens.",
  "In Switzerland, it's illegal to own only one guinea pig.",
  "After leaving office, Ronald Reagan was offered the role of Hill Valley's mayor in Back to the Future III.",
  "Foreign Accent Syndrome is a rare side effect of brain trauma. Patients speak their native language in a foreign accent.",
  "Queen Elizabeth II has had over 30 corgis in her lifetime.",
  "Relative to their bodies, Chihuahuas have the biggest brain in the dog world.",
  "The \"mystery\" flavor of Dum Dums is a combination of the end of one batch of candy and the beginning of another.",
  "A banana is a berry.",
  "In 1971, a Dallas man named Mariano Martinez invented the frozen margarita machine. The 26-year-old was inspired by the Slurpee machine at 7-Eleven.",
  "In 2016, a rogue bloodhound named Ludvine joined a half-marathon in Alabama. She ran the entire 13.1 miles and finished in 7th place.",
  "The Library of Congress regularly receives requests for books that don't exist. The most common is the President's Book of Secrets, from the 2007 movie, National Treasure: Book of Secrets.",
  "In 2014, Tinder made its first match on the continent of Antarctica. Not surprisingly, both parties involved were research scientists.",
  "When times get tough, elephants will comfort each other by stroking loved ones with their trunks and emitting small chirps.",
  "A double rainbow occurs when sunlight is reflected twice inside a raindrop. If you look closely, you can see that the colors of the secondary rainbow appear in reverse order.",
  "There's a Nikola Tesla statue in Palo Alto that provides free Wi-Fi.",
  "The Mobile Phone Throwing World Championships are held in Finland. One winner (not pictured) said he prepared for the event by \"mainly drinking.\"",
  "In the '50s, Marilyn Monroe promised nightclub owner Charlie Morrison she'd be in the front row every night if he booked Ella Fitzgerald. He agreed, and she was true to her word. \"After that, I never had to play a small jazz club again,\" Fitzgerald said. \"She was an unusual woman—a little ahead of her times. And she didn't know it.\"",
  "Frank Sinatra has three stars on the Hollywood Walk of Fame: one for film, one for music, and one for television.",
  "One April day in 1930, the BBC reported, \"There is no news.\" Instead they played piano music.",
  "Continental plates drift as fast as fingernails grow.",
  "Elvis Presley's manager sold \"I Hate Elvis\" badges as a way to make money off of people who weren't buying his merchandise.",
  "LEGO has a temperature-controlled underground vault in Denmark with nearly every set they've ever made.",
  "A reindeer's eyes change color through the seasons. They’re gold during the summer and blue in the winter.",
  "An avocado never ripens on the tree, so farmers can use trees as storage and keep avocados fresh for up to seven months.",
  "At the Humane Society of Missouri, kid volunteers comfort anxious shelter dogs by reading to them.",
  "In The Empire Strikes Back, an extra can be seen running with what appears to be an ice cream maker. The character became legendary among fans, and was eventually given a name (Willrow Hood) and a backstory.",
  "Salvador Dali avoided paying restaurant tabs by using checks. He would draw on the back as the waiter watched, knowing no one would ever cash the art.",
  "China owns all of the pandas in the world. They rent them out for about $1 million a year.",
  "In season two of The Joy of Painting, Bob Ross created a monochromatic landscape for a viewer who was worried that his color blindness would prevent him from being able to paint.",
  "Bones found at Seymour Island indicate that at one time, 37 to 40 million years ago, penguins stood at a formidable 6 feet tall and weighed 250 pounds.",
  
  ];

  const SKILL_NAME = 'Factberry';
  const GET_FACT_MESSAGE = "Here's your daily berry: ";
  const HELP_MESSAGE = 'You can say tell me the daily berry, or, you can say exit... What can I help you with?';
  const HELP_REPROMPT = 'What can I help you with?';
  const STOP_MESSAGE = 'Goodbye!';

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require(`./main.json`),
        datasources: {
          data: {
            type: 'object',
            properties: {
              SKILL_NAME,
              randomFact
            }
          }
        }
      })
      .getResponse();
  },
};

const MyNameIsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetNewFactIntent';
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .addDirective({
        document: require(`./main.json`),
        datasources: {
          data: {
            type: 'object',
            properties: {
              SKILL_NAME,
              randomFact
            }
          }
        }
      })
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    MyNameIsIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
