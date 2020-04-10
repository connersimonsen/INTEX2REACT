import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
import { useRouteMatch } from 'react-router-dom'
import { formatNumber } from './util'
import DetailCard from './details-card'
import ProgressBar from './progress-bar'


function CampaignDetail(props) {

    const context = React.useContext(AppContext)

    const match = useRouteMatch("/campaign/:slug")
    if (context.search) {
        var campaign = context.searchResults[match.params.slug]
    } else {
        var campaign = context.campaigns[match.params.slug]
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if (campaign == null) {
        return (
            <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1 className="text-center">Campaign Not Found</h1>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        )
    } else {
        let amt = (campaign.current_amount/campaign.goal)
        let fcolor = ""
        if (amt < .3) {fcolor = "#FF4F33"}
        else if (amt > .3 && amt < .9) {fcolor = "#FFC107"}
        else if (amt > .9) {fcolor = "#07b053"}
        
        let DonatorsRate = 0
        if (campaign.donators < 11) {DonatorsRate = .1}
        else if (campaign.donators >= 11 && campaign.donators < 41) {DonatorsRate = .2}
        if (campaign.donators >= 41) {DonatorsRate = .3}

        let CampRate = 0
        if (campaign.category_id === "Nonprofits & Charities" || campaign.category_id === "Funerals & Memorials" || campaign.category_id === "Celebrations & Events" || campaign.category_id === "Other") {CampRate = .3}
        else if (campaign.category_id === "Medical, Illness, & Healing" || campaign.category_id === "Community & Neighbors" || campaign.category_id === "Volunteer & Service" || campaign.category_id === "Creative Arts, Music & Film"|| campaign.category_id === "Business & entrepreneurs"|| campaign.category_id === "Weddings & Honeymoons"|| campaign.category_id === "Competitions & pageants"|| campaign.category_id === "Dreams, Hopes, & Wishes") {CampRate = .2}
        else if (campaign.category_id === "Missions, Faith, Church" || campaign.category_id === "Education & Learning" || campaign.category_id === "Sports, Teams, Clubs" || campaign.category_id === "Babies, kids & family" || campaign.category_id === "Animals & Pets" || campaign.category_id === "Accidents & Emergencies" || campaign.category_id === "Travel & Adventure") {CampRate = .1}
        else {CampRate = 0}

        let AutoFbPM = 0
        if (campaign.auto_fb_post_mode === "TRUE") {AutoFbPM = .2}
        else {AutoFbPM = 0}

        let SocialShare = 0
        if (campaign.social_share_total < 50) {SocialShare = .03}
        else if (campaign.social_share_total >= 50 && campaign.social_share_total < 150) {SocialShare = .06}
        else {SocialShare = .1}

        let IsChar = 0
        if (campaign.is_charity === "TRUE") {IsChar = .1}
        else {IsChar = 0}

        let RateTotal = (DonatorsRate + CampRate + AutoFbPM + SocialShare + IsChar) * 100
        let Rtlast = RateTotal.toFixed(0)
        console.log("RateTotal", Rtlast)

        let Quality = ""
        let qColor = ""
        if (Rtlast < 3) {Quality = "Low Quality"; qColor = "#FF4F33"}
        else if (Rtlast >= 3 && Rtlast < 62) {Quality = "Average Quality"; qColor = "#FFC107"}
        else {Quality = "High Quality"; qColor = "#07b053"}


        return(
            <bs.Container fluid className="p-4">
                <bs.Row>
                    <bs.Col md="7">
                        <h1 style={{display: 'inline'}}>{campaign.title}</h1>
                        <div className="mt-4 mb-4"><h3 className="mb-2">Based on our metrics, this campaign has a quality rate of {Rtlast}% and is considered of: </h3><h2 style={{color: qColor}}>{Quality}</h2></div>
                        <h5 className="mt-2"><span style={{fontSize: '28px', color: fcolor}}>${formatNumber(campaign.current_amount)}</span> raised of ${formatNumber(campaign.goal)} goal</h5>
                        <ProgressBar amt={amt} color={fcolor}/>
                        <h5 className="mt-3">{campaign.is_charity === "TRUE" ? "Charity Name: " + campaign.charity_name : "The creator is an individual"}</h5>
                        <br></br>
                        <p style={{fontSize: '22px'}}>{campaign.description}</p>
                    </bs.Col>
                    <bs.Col md="5">
                        <bs.Row>
                            <bs.Col md="12">
                                <DetailCard campaign={campaign} id={campaign.campaign_id} key={campaign.campaign_id}/>
                            </bs.Col>
                        </bs.Row>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        )


    }

}

export default CampaignDetail;