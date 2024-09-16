import { useEffect, useState } from "react"
import MyModal from "./MyModal"

const Welcome = () => {
    const [name, setName] = useState('Epicoder')
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        setIsModalVisible(true)
        setTimeout(() => {
            setIsModalVisible(false)
        }, 2000)
    }, [])

    return (
        isModalVisible && <MyModal show={isModalVisible} name={name} />
    )

}

export default Welcome