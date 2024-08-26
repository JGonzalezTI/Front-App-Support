

const TicketCard = ({ ticket }) => {
    const { title, description, status, priority, id } = ticket;
    
    return (
        <div className="ticket-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{status}</p>
        <p>{priority}</p>
        <Link to={`/ticket/${id}`}>View</Link>
        </div>
    );
}