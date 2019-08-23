import React from 'react'
import Welcome from '../components/Welcome'
import Information from '../components/Information'
import ImageSlider from '../components/ImageSlider'

export default function HomePage() {
    return (
        <div>
            <Welcome />
            <Information />
            <ImageSlider />
        </div>
    )
}