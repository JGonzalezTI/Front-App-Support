import React, { useEffect } from 'react';
import useTicketStore from '../../store/ticket.store';
import './index.css';


const AdminDashboard = () => {

    const tickets = useTicketStore((state) => state.tickets);

    console.log('tickets', tickets);

    return (
        <div className='adminDash-container'>
            <section className='recent-tickets-section'>
                <h2>Tickets Recientes</h2>
                <div className='search-input'>
                    <input type="text" placeholder="Buscar Ticket" />
                    <i>
                        <img src="" alt="filter-icon" />
                    </i>
                </div>
                <div>
                    <span>Tickets Abiertos</span> <span>{2}</span>
                </div>

                <div className='ticket-list-content'>
                    {tickets}
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;