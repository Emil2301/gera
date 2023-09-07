import './HockeyBox.css'
import {
    PdsBodyText, PdsButton,
    PdsDisplayText, PdsSubheadText,
} from "@podium-design-system/react-components";
import photo from "../assets/hockey.png";

function HockeyBox() {
    return (
        <div className="container-2">
            <div className="right-content">
                <img src={photo} className="logo-right" alt="React logo" />
            </div>
            <div className="left-content">
                <div className="left-content-text">
                    <PdsDisplayText
                        fontSize={1800}
                        fontWeight="strong"
                    >
                        Sports data widget
                    </PdsDisplayText>
                    <PdsSubheadText
                        fontSize={1100}
                        fontWeight="base"
                        surface="on-dark"
                    >
                        Integrate sports data into your content
                    </PdsSubheadText>
                    <PdsBodyText
                        fontSize={900}
                        fontWeight="base"
                        surface="on-dark"
                    >
                        Add live scores, schedules, standings, box scores or any other sports data widgets into your website without any development effort.
                    </PdsBodyText>
                </div>
                <div className="buttons">
                    <PdsButton
                        size="xl"
                        rank="outline"
                        color="neutral"
                        opaqueBackground={false}
                        surface="on-dark"
                    >
                        VIEW WIDGET
                    </PdsButton>
                    <PdsButton
                        size="xl"
                        rank="fill"
                        color="brand-primary"
                        opaqueBackground={false}
                        surface="on-dark"
                    >
                        START FREE TRIAL
                    </PdsButton>
                </div>
            </div>

        </div>
    )
}

export default HockeyBox
