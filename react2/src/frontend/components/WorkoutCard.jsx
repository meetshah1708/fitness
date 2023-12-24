/* eslint-disable react/prop-types */


export default function WorkoutCard({ work }) {
  return (
      <div className="   col-9  ">
          <div className="  w-75 border-2 text-center  border border-primary mt-5 ">
              <div className="h2 ">{work.title}</div>
              <div>reps :{work.reps}</div>
              <div className="">Load(kg):{work.load}</div>
              <div>Date</div>
              
          </div>
        
        
    </div>
  )
}
