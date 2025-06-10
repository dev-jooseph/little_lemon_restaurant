import React from "react";

export default function BookingForm(props) {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [guests, setGuests] = React.useState("");
    const [occasion, setOccasion] = React.useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, time, guests, occasion });
        console.log("Booking details:", { date, time, guests, occasion });
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        // If you're using Redux, make sure dispatch is part of the props
        // If dispatch isn't used, remove this line
        // props.dispatch(e.target.value); 
    };

    return (
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="book-date">Choose Date:</label>
                                <input
                                    type="date"
                                    id="book-date"
                                    name="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="book-time">Choose Time:</label>
                                <select
                                    id="book-time"
                                    name="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {props.availableTimes?.availableTimes?.map((timeOption) => (
                                        <option key={timeOption} value={timeOption}>{timeOption}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="book-guests">Number of Guests:</label>
                                <input
                                    type="number"
                                    id="book-guests"
                                    name="guests"
                                    min={1}
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="book-occasion">Occasion:</label>
                                <select
                                    id="book-occasion"
                                    name="occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value="">Select an occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="btnReceive">
                                <input
                                    aria-label="On Click"
                                    type="submit"
                                    value={"Book Table"}
                                />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
}
