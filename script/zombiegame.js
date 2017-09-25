function randomNumber(range) {
    return Math.round(Math.random() * range);
}

var threatList = ["zombie", "evil bear", "rabie infested English bulldog", "alt-right supporter"];

var threat = threatList[randomNumber(threatList.length - 1)];

alert("It's the end of the world. Well... not exactly.");
alert("You're still here, but so are the hordes of " + threat + "s that roam the planet and outnumber people like you ten million to one.");
alert("It's been months since you last saw another person. You think about this as you sit in the little cottage you've holed up in for the last year and you're trying to figure out what to wear today.");
alert("It's an odd task considering the circumstances, but it's nice to keep some semblance of normality in this messed up time.")
var shirt = prompt("There are three shirts on the bed. A red checkered lumberjack fleece, a blue button up oxford cotton, and a green T-shirt that reads 'I'm with stupid' and has an arrow that points up. What colour do you pick?").toLowerCase();

switch(shirt) {
    case "red":
    case "lumberjack":
    case "red lumberjack":
    case "red shirt":
        var shirt ="red lumberjack shirt";
        alert("You look pretty stupid in that" + " " + shirt + ". I mean it's the " + threat + " apocolypse and you decided to where the brightest colour you could find. Solid choice.");
        alert("P.S. Have you never watched Star Trek? Who chooses a red shirt when starting an adventure?");
        alert("Have fun dying.");
        break;
    case "blue":
    case "oxford":
    case "oxford cotton":
    case "button up":
    case "blue button up":
    case "blue button up oxford cotton":
        var shirt = "blue button up oxford cotton";
        alert("Are you going to a frat party? What a weird choice. I guess you gotta look stylish as you run through the woods looking for dinner tonight in a" + " " + shirt + ". Probably should have gone with the green shirt...");
        alert("...because you're stupid.");
        alert("Trust me.");
        alert("You're gonna die.");
        break;
    case "green": 
    case "T-shirt":
    case "tshirt":
    case "green T-shirt":
    case "green shirt":
        var shirt = "sweet green T";
        alert("Well that's a pretty good choice! I mean we are at a cottage, so we're probably in the woods. Lots of trees and bushes around. Out of red, blue, and green, I'd say a" + " " + shirt + " " + "is the least stupid choice.");
        alert("Which you realize is ironic as you look down at your chest.");
        break;
    default:
        var shirt = "ugly naked body";
        alert("Wow. You couldn't choose a colour properly. You're going to last a long time.");
        alert("You know what? Since you couldn't even choose a shirt properly, I'm forced to assume you couldn't figure out to dress yourself at all.");
        alert("You're naked. Congratulations.");
        alert("Idiot.");
        break;        
}

alert("You're standing in the kitchen with your" + " " + shirt + " on full display.");
alert("You haven't eaten for a couple days. Going out hunting is dangerous, and there's barely anything left to hunt.");
var weapon = prompt("You walk outside to your makeshift hunting shack. There's a cast iron frying pan, a nerf gun, a Harry Potter DVD, and military grade assault rifle. Which do you pick to take hunting?").toLowerCase();

if (weapon === "frying pan" | weapon === "cast iron frying pan" | weapon === "pan" | weapon === "cast iron pan" | weapon === "iron pan" | weapon === "cast frying pan" | weapon === "cast pan") {
  var weapon = "pan";
  alert("You grab the " + weapon + ". Clearly someone has been playing too much PUBG.");
}

else if (weapon === "nerf gun" | weapon === "nerf") {
  var weapon = "nerf gun";
  alert("You pick up the " + weapon + ". It's a good choice because you have thousands of hours of experience using this weapon from childhood.");
  alert("You grab a stack of darts, and head out into the woods.");
  alert("You start to wonder if a " + shirt + " and a " + weapon + " are the best hunting gear in a " + threat + " apocalypse...");
}

else if (weapon === "harry potter" | weapon === "harry potter dvd" | weapon === "dvd" | weapon === "potter dvd") {
  var weapon = "Harry Potter and the Philosopher's Stone: Criterion Collection DVD";
  alert("Upon closer inspection, this isn't just any regular Harry Potter DVD. This is a " + weapon);
}

else if (weapon === "military grade assault rifle" | weapon === "military grade rifle" | weapon === "assault rifle" | weapon === "military rifle" | weapon === "rifle") {
  var weapon = "assault rifle";
  alert("Hey, an assault rifle. Probably a logical choice considering the circumstances. You unfortunately have very little experience with this though.");
  alert("Good luck.");
}

else if (weapon === "gun") {
  var weapon = "military grade assault rifle loaded with 9mm nerf bullets";
  alert("Well that wasn't very specific. There were two guns in the shed.");
  alert("You clearly have an attention for detail.");
  alert("You pick up the assault rifle and foam nerf bullets.");
}

else {
  var weapon = "fists";
  if (shirt === "ugly naked body" && weapon === "your fists") {
    alert("Wow.");
    alert("*slow applauding*");
    alert("Couldn't figure out how to choose one weapon either?")
    alert("You're about to run into " + threat + " infested woods with nothing but your " + shirt + " and " + weapon + " to defend yourself.");
    alert("I'm going to level with you. Your chances of survival have dropped to one in a thousand.");
    alert("Let's also be clear. This is programmed. When I say you are going to die 999 times in 1000 - you're going to die 999 times in 1000.");
    alert("Godspeed you special specimen of stupidity.");
  }
  else {
    alert("So we have found your limitations.");
    alert("You can pick a shirt and dress yourself, but picking one weapon is clearly too difficult.");
    alert("Get ready Rocky. You're about to enter the woods with nothing but " + weapon + " to protect you.");
  }
}

alert("You step out into the woods.");
if (weapon != "fists") {
  alert("The weight of your " + weapon + " feels good in your hands.");
} else {
  alert("You kind of wish you had more than " + weapon + " to defend yourself.");
}
alert("It's cold out.");
if (shirt != "ugly naked body") {
  alert("Maybe you should have grabbed a jacket as well... but at least you're not naked like some of the other people playing this game.");
} else {
  alert("Probably should have worn some clothes. There's a 50/50 chance you'll freeze to death.");
  var hypothermia = randomNumber(1);
  if (hypothermia === 0) {
    alert("Yep. You froze to death. Probably should have put some clothes on.");
    location.reload();
  } else {
    alert("You're lucky it's not quite winter yet. Another couple weeks and you'd be dead.");
  }
}

alert("Something appears to be moving behind a tree just to your north.");
var investigate = randomNumber(1);
if (investigate === 0) {
  alert("You walk over to the tree." + " Nervous, but " + weapon + " at the ready.");
  var attackOne = randomNumber(1);
  if (attackOne === 0) {
    alert("A " + threat + " jumps out from behind the tree!");
    var attackTwo = randomNumber(3);
    if (attackTwo === 0) {
      alert("You're not fast enough. To be honest, you didn't really think you'd last this long anyway.");
      alert("You're dead.");
      alert("Or a " + threat + "... To be honest, who knows? But you lost.");
      alert("Better luck next time.");
      location.reload();
    } else {
      if (weapon === "nerf gun") {
        alert("Each foam dart is like carrier pidgeon of death. Your hours of practice as a child defy all logical expectations and your nerf bullets hit with the lethality of a fucking missle.");
        alert("Who knew this was possible?");
      } else if (weapon === "pan") {
        alert("Your wildly swung frying pan is aimed directly at the " + threat + "s head.");
        alert("It explodes like the pumpkin you left outside the night before Hallowe'en when you were a kid that that asshole smashed.");
      } else if (weapon === "fists") {
        alert("You punch the " + threat + " right in the face.");
        alert("You are the reincarnation of Rocky Balboa obviously.");
        alert("You literally punch the " + threat + " in half.");
      } else if (weapon === "Harry Potter and the Philosopher's Stone: Criterion Collection DVD") {
        alert("You lethally throw the DVD like a weapons grade frisbee. It soars through the air like only Harry Potter can fly.");
        alert("The disc slices the " + threat + " in half... vertically!");
        alert("It's incredible.");
      } else if (weapon === "assault rifle") {
        alert("You close your eyes and fire blindly!");
        alert("You open your eyes...");
      } else {
        alert("The gun jams!");
        alert("Maybe it's because you put nerf bullets in a military grade assault rifle...");
        alert("You die.");
        alert("Big surprise.");
        location.reload();
      }
      alert("You've killed the " + threat + ".");
      alert("Still shaking, you refocus on the task at hand.");
      alert("You continue your hunt for food when you trip over something... wait, someONE!");
      alert("ODEN'S BEARD! It's your old friend Derek!");
    }
  } else {
    alert("Someone jumps out from behind the tree! You ready your " + weapon + " to attack!");
    alert("It's too late when you realize this isn't a " + threat + "! It's your old friend Derek!");
    var derek = randomNumber(5);
    if (derek === 0 && weapon != "fists") {
      alert("Oh my God. You've mortally wounded Derek.");
      alert("He was always a little weird, but he didn't deserve this.");
      alert("You are stricken with grief.");
    } else {
      if (weapon === "nerf gun" | weapon === "assault rifle" | weapon === "military grade assault rifle loaded with 9mm nerf bullets") {
        alert("Luckily, you're a terrible shot. All your bullets miss.");
      } else if (weapon === "pan") {
        alert("Your wildly swung frying pan is aimed directly at Derek's head.");
        alert("He ducks just in time to dodge the blow.");
      } else if (weapon === "fists") {
        alert("You punch Derek right in the face.");
        alert("You're kind of a jerk.");
        alert("He'll live though.");
      } else {
        alert("You lethally throw the DVD like a weapons grade frisbee. It soars through the air like only Harry Potter can fly.");
        alert("You miss entirely.");
      }
    }
    alert("You apologize to Derek.");
  }
} else {
  alert("You dash to your south in a dead sprint. You didn't survive this long by investigating things in the dark woods.");
  alert("You suddenly trip over something... wait, someONE!");
  alert("ODEN'S BEARD! It's your old friend Derek!");
}

alert("Derek looks at you. The recognition creeping on to his face slowly.");
if (shirt === "ugly naked body") {
  alert("He sees that you're naked.");
  alert("His face is unreadable.");
  alert("He breaks off in a mad dash in the opposite direction.");
  alert("Your " + shirt + " has clearly offended him.");
  alert("You're distracted by this and your guard is down.");
  var derekGone = true;
} else {
  alert("He's wearing a " + shirt + " just like yours...");
  alert("That's a little weird.");
  alert("You're distracted by this. Your guard is down.");
}

alert("A " + threat + " suddenly comes running in your direction!");
var attackThree = randomNumber(3);
  if (attackThree === 0) {
    alert("You didn't have time to ready your " + weapon + ".");
    alert("The " + threat + " is Dale Spiteri, and you're a Skor McFlurry.");
    alert("If you don't know Dale Spiteri that well, it's another way of saying that you were savagely eaten.");
    alert("Sorry.");
    alert("You're dead.");
    location.reload();
  } else {
    if (derekGone !== true) {
      alert("Derek doesn't make it.");
      alert("He's been bitten.");
      alert("Using the time Derek's death has brought you, you finish the " + threat + " with your " + weapon + ".");
      alert("You bend over to comfort Derek.");
      alert("He asks what that thing was.");
      alert("Apparently he didn't even realize the apolcalypse was taking place.");
      alert("He's just been living in the woods.");
      alert("He was always a bit weird.");
    } else {
      alert("You manage to take care of the " + threat + " with your " + weapon + ".");
    }
  }

alert("Well, this has been a disaster so far.");
alert("You're standing on a path in woods at this point, and there is a path to the North, a path to the West, and path that leads back home.");
var direction = prompt("Which direction do you go?").toLowerCase();

if (direction === "north" | direction === "go north" | direction === "north path") {
  alert("You go North.");
  alert("OMG. It's " + threat + " Jon Snow!");
  alert("You're star struck.");
  alert("So much so that you forget he's a " + threat + ".");
  alert("You do your best 'You know nuffin' Jon Snow' impression");
  alert("He lunges at you. You're a cupcake, and He's Samwell Tarly.");
  alert("Ya, that means you're dead.");
  alert("Eaten by " + threat + " Jon Snow.");
  
} else if (direction === "west" | direction === "go west" | direction === "west path") {
  alert("You go West.");
  alert("There's a boat.");
  var boat = confirm("Do you want to get in the boat?");
  
  if (boat === true) {
    alert("You get in boat and start rowing to a light you see in the distance.");
    alert("HOLY SHIT! THERE'S A " + threat + " DOING THE BREAST STROKE CHASING YOU!");
    alert("Apparently contradicting popular belief, " + threat + "s CAN swim.");
    alert("You look closer, and it's " + threat + " Michael Phelps.");
    alert("You hit him with your paddle.");
    alert("You've scared him off, but you've broken your only paddle.");
    var swim = confirm("Do you get out and swim?");
    
    if (swim === true) {
      alert("You're not that far from the island with the light.");
      alert("You reach the shore. You shouldn't have left your cottage. This has gone horribly.");
      alert("There's a strange building.");
      alert("As you approach it, you notice there's a slot... approximately five inches wide, but very narrow...");
      var action = prompt("What do you do?");
      var dvd = action.includes("dvd");
      
      if (dvd === true && weapon === "Harry Potter and the Philosopher's Stone: Criterion Collection DVD") {
        alert("You slide " + weapon + " into the slot.");
        alert("A giant television bursts out of the roof of the stone building high into the air.");
        alert("The movie begins to play.");
        alert("" + threat + "s begin to swarm the island...");
        alert("You're sure this is how you'll die.");
        alert("Oddly enough, they don't attack you...");
        alert("They just pass and stare at the giant screen... transfixed by the magical world crafted by J.K. Rowling.");
        alert("You've saved the world.")
        alert("You win.");
        
      } else if (dvd === true && weapon !== "Harry Potter and the Philosopher's Stone: Criterion Collection DVD") {
        alert("You don't have the DVD...");
        alert("Bet you wish you took that now...");
        alert("" + threat + "s swarm you and eat you.");
        alert("You're dead.");
        
      } else if (dvd === true && shirt === "ugly naked body" && weapon === "fists") {
        alert("Remember when I said you made stupid choices and that I'd get you for it?");
        alert("Time to pay the piper.");
        alert("I'm even going to pretend you magically have the DVD you're pretending to have.")
        alert("The movie begins to play.");
        alert("" + threat + "s begin to swarm the island...");
        alert("You threateningly brandish your " + weapon + ".");
        alert("Oddly enough, they don't attack you...");
        alert("They just pass and stare at the giant screen... transfixed by the magical world crafted by J.K. Rowling.");
        alert("You've saved the world.")
        alert("You trip on a pebal as you're leaving the island.")
        var probablyDead = randomNumber(999);
          
        if (probablyDead === 999) {
          alert("Holy fucking shit. You don't realize this... but you just avoided certain death.");
          alert("You're fine. You walk away. You saved the world. It was 1 in 1000.");
          alert("You win.");
        } else {
          alert("You fall and break your neck.");
          alert("You die, and you lose.");
        }
        
      } else {
        alert("You clearly don't know what you're doing...");
        alert("" + threat + "s swarm the island");
        alert("They eat you, and you die.");
        alert("You lose.");
      }

    } else {
      alert("You sit in your boat.");
      alert("Forever.");
      alert("You're going to die because you can't swim.");
      alert("" + threat + " Michael Phelps comes back and you have no paddle to protect yourself.");
      alert("You attack with your " + weapon + " but he's too agile in the water!");
      alert("He jumps in the boat and eats you.");
      alert("You're dead.");
    }
  } else {
    alert("As you stand there making the stupid decision not to take the boat, a " + threat + " jumps out and eats you.");
    alert("Probably should have taken the boat.");
    alert("Everyone knows " + threat + "s can't swim.");
  }
} else if (direction === "home" | direction === "go home" | direction === "back") {
  alert("You go home.");
  alert("You open the door to your little cottage.");
  alert("It's swarming with " + threat + "s!");
  var attackHome = randomNumber(3);

    while (attackHome === 1 | attackHome === 2 | attackHome === 3) {
        var threatAttack = ["A " + threat + " jumps and attacks you with a spinning round-house kick... but you defelect it with your " + weapon + ".", "A " + threat + " cartwheels into you but you kick it threw an open window!", "Two " + threat + "s charge you at once, but using your kung fu you learned from The Matrix trilogy, you easily dispatch of both!"];
        alert(threatAttack[randomNumber(2)]);
        var attackHome = randomNumber(3);
    }
    
    alert("You are finally killed by a " + threat + ".");
    alert("Your game is over.");
    location.reload();
    
    
} else {
  var direction = "just stand there";
  if (shirt === "ugly naked body" && weapon === "fists" && direction === "just stand there") {
    alert("Okay... You just stand there.");
    alert("Naked.");
    alert("Unarmed.");
    alert("How the hell did you make it this far?");
    alert("A piano falls out of the sky and kills you.");
    alert("There you go. You wanted to be difficult.");
    alert("Now you're dead.");
    location.reload();
  } else {
    alert("You stand there.");
    alert("I mean, you don't HAVE to move.");
    alert("You stand there forever.");
    if (shirt === "ugly naked body") {
      alert("Naked.");
    }
    alert("You have successfully avoided being eaten by " + threat + "s...")
    alert("...but you die of starvation.");
    alert("How ironic.");
    alert("You lose.")
  }
}