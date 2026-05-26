import Link from "next/link";

export default function App() {
    return (
        <div>
            <div>
                <h1 className="text-2xl">All Open Tickets</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-orange-100">
                    Courtyard
                    <br/>
                    <button className="navButton">go</button>
                </div>
                <div className="bg-orange-100">Fairfield Inn</div>
                <div className="bg-orange-100">Hampton Inn - Kinetic</div>
                <div className="bg-orange-100">Holiday Inn Express</div>
                <div className="bg-orange-100">***auto populate when new tickets created***</div>
                <div className="bg-orange-100">***auto populate when new tickets created***</div>
                <div className="bg-orange-100">***auto populate when new tickets created***</div>
                <div className="bg-orange-100">***auto populate when new tickets created***</div>
            </div>
            <div id="nav">
                <Link href="/">
                    <button className="navButton">Back</button>
                </Link>
            </div>
        </div>
    )
}