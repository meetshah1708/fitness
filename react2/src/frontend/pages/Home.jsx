
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import WorkoutCard from '../components/WorkoutCard.jsx'
import WorkoutForm from '../components/WorkoutForm.jsx'

export default function Home() {
  const [ workout, setWorkout ] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts/',{
          method: 'GET',
          mode : 'no-cors'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.ok) {
          const data = await response.json();
          setWorkout(data)
        }

        
        // Process the JSON data
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
        // Handle the error gracefully
      }

    }
    fetchWorkouts()
  }, [])

  return (

    <div >
      <Navbar />
      <div className="d-flex">
        {/* find better way to align items */}
        <div className='col-9'>
          {workout && workout.map((work) => (

            <WorkoutCard key={work._id} work={work} />
          ))}
        </div>
        <WorkoutForm />
      </div>
    </div>
  )
}
