import GalleryItem from './GalleryItem'
import {useContext} from 'react'
import DataContext from '../context/DataContext'
function Gallery(){
    const data = useContext(DataContext)

    function mapItems(item, i) {
        return  <GalleryItem key = {i} item = {item}/>;
    }
    return (
        <div>
            {
                data.map(mapItems)
            }
        </div>
    )
}

export default Gallery
