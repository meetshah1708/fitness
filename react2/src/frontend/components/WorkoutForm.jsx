
import { useState } from "react"

export default function WorkoutForm() {
    const [ title, setTitle ] = useState("")
    const [ reps, setreps ] = useState("")
    const [ load, setload ] = useState("")
    const [ err, setErr ] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() //prevents default actn of refreshing page on submit
        const workout = { title, reps, load }//put new values
       
        console.log(JSON.stringify(workout))

        const create = async (workout) => {

            const response = await fetch("http://localhost:4000/api/workouts/", {
                mode: 'no-cors',//fix cors
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    // 'Access-Control-Allow-Origin',
                },
                body: JSON.stringify(workout)

            })
            try {
                if (!response.ok) {

                 
                    setErr(response.err)
                }
                if (response.ok) {
                    setTitle('')
                    setload("")
                    setreps("")
                    console.log("new workout added")
                }

            }
            catch (err) { console.log(err) }

        }
        create()
    }
    return (
        <div className=" col-3 mt-5  ">
            <form className=' ' onSubmit={handleSubmit}>
                <h3>Add a new workout </h3>
                <label className="" htmlFor="">Exercise Title</label>
                <input type="text" className="d-flex" id=""
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label className="" htmlFor="">Reps :</label>
                <input type="number" className="d-flex" id=""
                    onChange={(e) => { setreps(e.target.value) }}
                    value={reps} />

                <label className="" htmlFor="">Load(kg):</label>
                <input type="number" className="d-flex" id=""
                    onChange={(e) => setload(e.target.value)}
                    value={load} />
                <button className="btn btn-primary form btn-sm mt-3" type="submit">Submit </button>

            </form>
            {err && <div>Something Wrong happened .{err}</div>}
        </div>
    )
}
