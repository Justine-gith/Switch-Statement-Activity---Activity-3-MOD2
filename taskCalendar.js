function taskCalendar() {
    let calendar = prompt("Enter a day of the week").toLowerCase();
    switch (calendar) {
      case "monday":
        alert("Your task for Monday is: Finish your assignments.");
        break;
      case "tuesday":
        alert("Your task for Tuesday is: Work on reports.");
        break;
      case "wednesday":
        alert("Your task for Wednesday is: Respond to emails.");
        break;
      case "thursday":
        alert("Your task for Thursday is: Work on presentations.");
        break;
      case "friday":
        alert("Your task for Friday is: finish weekly reports.");
        break;
      case "saturday":
        alert("Your task for Saturday is: Go for Outdoor Activities.");
        break;
      case "sunday":
        alert("Your task for Sunnday is: Make a meal prep for the week.");
        break;
      default:
        alert("Invalid input. Please enter a valid day of the week.");
    }
}