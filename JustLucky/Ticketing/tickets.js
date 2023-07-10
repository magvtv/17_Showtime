
const showtimeSelect = document.getElementById('showtimeSelect')
const theatreSelect = document.getElementById('theatreSelect')
const seatSelect = document.getElementById('seatSelect')

const bookButton = document.getElementById('bookButton')

bookButton.addEventListener("click", () => {
    const selectedTheatre = theatreSelect.value
    const selectedShowTime = showtimeSelect.value;
    const selectedSeat = seatSelect.value
})

const ticketData = {
    film: "Guardians of the Galaxy",
    showtime: selectedShowTime,
    theatre: selectedTheatre,
    seat: selectedSeat
}

const ticketJSON = JSON.stringify(ticketData);
const ticketURL = "mailto: magutujr@gmail.com?subject = Ticket % 20Booking & body=" + encodeURIComponent(ticketJSON);
window.location.href = ticketURL

console.log(ticketData)
