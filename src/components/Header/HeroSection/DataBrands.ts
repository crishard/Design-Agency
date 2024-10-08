import img1 from "../../../assets/logos_google.png"
import img3 from "../../../assets/logos_monday.png"
import img4 from "../../../assets/Notion.png"
import img5 from "../../../assets/Slack.png"
import img2 from "../../../assets/Trello-logo-blue 1.png"

import img3Responsive from "../../../assets/Group.png"
import img1Responsive from "../../../assets/icons8-google-100.png"
import img4Responsive from "../../../assets/icons8-notion-100.png"
import img5Responsive from "../../../assets/icons8-slack-100.png"
import img2Responsive from "../../../assets/icons8-trello-100.png"


export interface Brand {
    image: string;
    alt: string;
}

export const brands: Brand[] = [
    {
        alt: 'Google',
        image: img1,
    },
    {
        alt: 'Trello',
        image: img2,
    },
    {
        
        alt: 'Monday.com',
        image: img3,
    },
    {
        alt: 'Notion',
        image: img4,
    },
    {
        alt: 'Slack',
        image: img5,
    },
];



export const brandsResponsive: Brand[] = [
    {
        alt: 'Google',
        image: img1Responsive,
    },
    {
        alt: 'Trello',
        image: img2Responsive,
    },
    {
        
        alt: 'Monday.com',
        image: img3Responsive,
    },
    {
        alt: 'Notion',
        image: img4Responsive,
    },
    {
        alt: 'Slack',
        image: img5Responsive,
    },
];
