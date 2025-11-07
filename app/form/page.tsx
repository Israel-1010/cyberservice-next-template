import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { API_URL } from 'config';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export default function HomePage({ events }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <Head>
        <title>Event Listing</title>
        <meta name='description' content='Find the latest Events' />
      </Head>

      <h1 className='text-3xl font-bold mb-5'>Upcoming Events</h1>

      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <div key={evt.id}>
          <div>
            <Image src={evt.image ? evt.image.formats.thumbnail.url : '/images/event-default.png'} width={170} height={100} />
          </div>
          <div>
            <span>
              {format(new Date(evt.date), 'MMMM dd, yyyy')} at {evt.time}
            </span>
            <h3 className='text-2xl mt-3 mb-3'>{evt.name}</h3>
            <Link href={`/events/${evt.slug}`}>
              <a className='btn-secondary'>Details</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
};