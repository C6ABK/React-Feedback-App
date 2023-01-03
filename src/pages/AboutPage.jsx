import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

function AboutPage() {
    return (
        <Card>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio assumenda repellat perferendis, libero fugiat iure aliquid doloribus nisi a, pariatur, officia sint nesciunt magnam harum aperiam ut quisquam? Libero?

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage