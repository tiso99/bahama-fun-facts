
import React, { useState, useEffect } from 'react';
import GlassCard from './ui-custom/GlassCard';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const bahamasFacts = [
  "The Bahamas consists of more than 700 islands and cays, with only about 30 of them inhabited.",
  "The name 'Bahamas' comes from the Spanish 'Baja Mar' which means 'shallow sea'.",
  "The Bahamas gained independence from Britain on July 10, 1973.",
  "The beautiful pink sand beaches in the Bahamas get their color from crushed red shells of foraminifera, a marine organism.",
  "The Bahamas has the clearest water on Earth with visibility of over 200 feet (61 meters) in some areas.",
  "The Atlantis resort on Paradise Island features the world's largest open-air marine habitat.",
  "The Bahamas was once a haven for pirates, including the notorious Blackbeard.",
  "The Bahamas is home to swimming pigs on Big Major Cay, who swim out to greet boats.",
  "Andros Island in the Bahamas has the third-largest barrier reef in the world.",
  "The national bird of the Bahamas is the flamingo.",
  "The Bahamas has one of the highest numbers of blue holes (underwater sinkholes) in the world.",
  "Junkanoo is the national festival of the Bahamas, celebrated on Boxing Day and New Year's Day.",
  "The deepest blue hole in the world, Dean's Blue Hole, is located in the Bahamas at 663 feet deep.",
  "The Bahamas was where Christopher Columbus first made landfall in the New World in 1492.",
  "The Abacos islands are famous for their boat-building industry.",
  "The Bahamas has 2,400 coral reefs surrounding its islands.",
  "Bahamian cuisine is famous for conch dishes, rock lobster, and tropical fruits.",
  "The Bahamas has no rivers or lakes; all freshwater comes from rainfall and aquifers.",
  "Goombay is a form of Bahamian music that combines African rhythms with European melodies.",
  "Exuma Cays Land and Sea Park was the first marine protected area in the Caribbean.",
  "The Bahamas has an average of 340 sunny days per year.",
  "Tourism accounts for about 60% of the Bahamian GDP and provides jobs for about half the Bahamian workforce.",
  "The island of Bimini was a favorite retreat of Ernest Hemingway, who wrote 'Islands in the Stream' there.",
  "The Bahamas is home to the Lusca, a mythical half-octopus, half-shark creature said to live in blue holes.",
  "The Bahamas has some of the world's most beautiful beaches, with sand that stays cool even in hot weather.",
  "Nassau, the capital city, was once called Charles Town before being renamed in 1695.",
  "The Bahamas has one of the most stable democracies in the Caribbean.",
  "Glass Window Bridge on Eleuthera Island separates the dark blue Atlantic Ocean from the turquoise Caribbean Sea.",
  "The Abaco wild horses were a unique breed that lived in the pine forests of Great Abaco Island for centuries.",
  "The underwater cave system in the Bahamas is among the most extensive in the world.",
  "The Bahamas Dollar is pegged to the US Dollar at a 1:1 ratio.",
  "Rake and scrape is a traditional form of Bahamian music played with a saw, goatskin drum, and accordion.",
  "Inagua, the southernmost island, is home to over 80,000 flamingos, the world's largest breeding colony.",
  "More than 60 shipwrecks are scattered around the islands, making it a popular diving destination.",
  "Traditional Bahamian houses are built with limestone blocks cut from the islands themselves.",
  "The Bahamas has the highest population of bottlenose dolphins in the world.",
  "The Bahamas has some of the largest underwater cave systems in the world.",
  "The Out Islands of the Bahamas are also known as the 'Family Islands'.",
  "Paradise Island, connected to Nassau by two bridges, was formerly known as Hog Island.",
  "Lignum vitae, one of the hardest woods in the world, is native to the Bahamas.",
  "The Bahamas has no income tax, capital gains tax, or inheritance tax.",
  "Pineapples were once the main export of the Bahamas before tourism took over.",
  "The Clifton Heritage Park in Nassau preserves the remains of three historic eras: the Lucayan Indians, the Loyalist plantation era, and the post-emancipation Bahamian heritage site.",
  "Seven-mile beach on San Salvador island is believed to be where Columbus first landed in 1492.",
  "Dive Thunderball Cave on Staniel Cay, where scenes from the James Bond movie 'Thunderball' were filmed.",
  "Guanahani was the native Lucayan name for the island now known as San Salvador.",
  "Bahamian straw markets are famous for handwoven baskets, hats, and other crafts made from dried palm fronds.",
  "The Arawak people were the original inhabitants of the Bahamas before European contact.",
  "The Bahamas has a land area of just 5,358 square miles (13,878 square kilometers) despite covering 100,000 square miles of ocean.",
  "The highest point in the Bahamas is Mount Alvernia on Cat Island, at only 207 feet (63 meters) above sea level.",
  "Bonefish, known for their speed and fighting ability, make the Bahamas a world-class fly fishing destination.",
  "The native people of the Bahamas, the Lucayans, were entirely wiped out within 25 years of Columbus's arrival.",
  "The stunning blue waters of the Bahamas appear that way because of the reflection of the white sand seafloor through crystal clear water.",
  "The Bahamas has one of the highest standards of living in the Caribbean.",
  "The Exuma Cays are a chain of 365 islands and cays, one for each day of the year.",
  "Sponge harvesting was once a major industry in the Bahamas.",
  "The Bahamas was a major transit point during the American Prohibition era for smuggling alcohol to the United States.",
  "Royal Island once served as the exclusive retreat for King Edward VIII and Wallis Simpson.",
  "Conch is so important in Bahamian culture that it's referred to as the 'Nassau Viagra'.",
  "Bahamian Bush Medicine uses local plants for healing and has been practiced for centuries.",
  "The Bahamas has one of the largest maritime exclusive economic zones in the region.",
  "Kalik is the national beer of the Bahamas, named after the sound of cowbells in Junkanoo parades.",
  "The Bahamas has 29 airports, more per capita than most countries in the world.",
  "The Lucayan National Park on Grand Bahama Island contains one of the world's longest underwater cave systems.",
  "Bahamian Regattas are major sailing competitions that have been held since the 1950s.",
  "The Abacos were largely settled by British Loyalists fleeing the United States after the American Revolution.",
  "Androsia is a famous hand-dyed batik fabric made in Andros Island since 1973.",
  "The Bahamas participated in its first Olympic Games in 1952 in Helsinki.",
  "The Pompey Museum in Nassau is named after a slave who led a rebellion in the Exumas in 1830.",
  "Harbour Island is famous for its unique pink sand beaches that get their color from crushed red shells of foraminifera.",
  "Junkanoo costumes can take up to a year to create and weigh as much as 100 pounds.",
  "The Bahamas Parrot is an endangered species found only on Abaco and Great Inagua Islands.",
  "Cat Island was named either after the pirate Arthur Catt or for the large number of wild cats found there by early settlers.",
  "The Bahamas has been a member of the Commonwealth of Nations since its independence.",
  "Sky juice is a popular Bahamian cocktail made with gin, coconut water, and condensed milk.",
  "The Bahamas has one of the highest percentages of return visitors in the Caribbean.",
  "Bahamian Obeah is a folk magic and religious practice similar to Voodoo.",
  "The salt industry on Great Inagua was once so important that salt was considered 'white gold'.",
  "The Bahamas has been inhabited for at least 1,000 years, with the Lucayan people arriving around 500-800 AD.",
  "The Bahamas' national tree is the lignum vitae, known for its beautiful blue flowers and medicinal properties.",
  "Eleuthera's name comes from the Greek word for 'freedom'.",
  "Pig Beach on Big Major Cay is home to a colony of swimming pigs that have become a major tourist attraction.",
  "The Bahamas was used as a base for American astronaut training due to its similarity to lunar landscapes.",
  "Bahamian mythology includes stories of the Chickcharney, a mysterious creature said to live in the forests of Andros.",
  "The Bahamas has no military forces but maintains a defense force that serves as coast guard, navy, and maritime patrol."
];

const BahamasFacts = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  const showRandomFact = () => {
    setIsChanging(true);
    
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * bahamasFacts.length);
      } while (newIndex === currentFactIndex);
      
      setCurrentFactIndex(newIndex);
      setIsChanging(false);
    }, 500);
  };
  
  useEffect(() => {
    // Automatically change fact every 15 seconds
    const interval = setInterval(() => {
      showRandomFact();
    }, 15000);
    
    return () => clearInterval(interval);
  }, [currentFactIndex]);
  
  return (
    <section id="facts" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bahamas-turquoise via-bahamas-blue to-bahamas-turquoise opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block glass px-3 py-1 rounded-full mb-3">
            <span className="text-sm font-medium text-bahamas-turquoise">Paradise Facts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
            Fascinating Bahamas Knowledge
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the wonders of the beautiful Bahamas with our collection of interesting facts about this Caribbean paradise.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <GlassCard className="min-h-[200px] flex flex-col items-center justify-center text-center p-8 md:p-10 relative overflow-hidden">
            {/* Animated glow effect in the background */}
            <div className="absolute -inset-1 bg-bahamas-turquoise/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div 
                className={`text-xl md:text-2xl font-display text-balance mb-8 min-h-[96px] flex items-center transition-opacity duration-500 ${
                  isChanging ? 'opacity-0' : 'opacity-100'
                }`}
              >
                "{bahamasFacts[currentFactIndex]}"
              </div>
              
              <Button 
                onClick={showRandomFact}
                className="rounded-full bg-bahamas-coral hover:bg-bahamas-coral/80 text-white group"
              >
                <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" />
                Show Another Fact
              </Button>
            </div>
          </GlassCard>
          
          <p className="text-center text-slate-500 text-sm mt-4">
            In our database, we currently have <span className="text-bahamas-blue font-semibold">{bahamasFacts.length}</span> fascinating Bahamas facts. 
            This collection is growing regularly!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BahamasFacts;
