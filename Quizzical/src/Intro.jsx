export default function Intro({ handleClick }) {
    return (
        <div className="intro">
            <h1>Quizzical</h1>
            <button onClick={handleClick}>Start quiz</button>
        </div>
    )
}