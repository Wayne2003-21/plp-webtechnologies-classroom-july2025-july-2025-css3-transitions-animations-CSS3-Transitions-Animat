let bookingCount = 0;

function calculateDiscount(nights) {
  let freeNights = Math.floor(nights / 3); 
  return freeNights;
}

function logMessage(message) {
  console.log("Hotel Log:", message);
  return message;
}

function highlightRoom() {
  const room = document.getElementById("roomCard");
  room.classList.toggle("active");

  bookingCount++;
  let freeStay = calculateDiscount(bookingCount);
  logMessage("Booking clicked " + bookingCount + " times. Free nights: " + freeStay);
}

function toggleModal() {
  const modal = document.getElementById("offerModal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
