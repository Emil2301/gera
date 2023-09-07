import './Header.css'
import reactLogo from '../assets/Logo.png'
import {PdsButton, PdsDropdownButton, PdsTab, PdsTabGroup} from "@podium-design-system/react-components";
import {PdsCartIcon, PdsUser2AvatarIcon} from "@podium-design-system/react-icons";

function Header() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="buttons">
                    <PdsButton
                        size="md"
                        rank="ghost"
                        color="neutral"
                        opaqueBackground={false}
                        surface="on-dark"
                    >
                        <PdsCartIcon slot="leading-icon"/>
                        CART
                    </PdsButton>
                    <PdsDropdownButton
                        size="md"
                        rank="outline"
                        color="neutral"
                        opaqueBackground={false}
                        surface="on-dark"
                    >
                        <PdsUser2AvatarIcon slot="leading-icon"/>
                        LOG IN / REGISTER
                    </PdsDropdownButton>
                </div>
            </header>
            <div className="tab-group">
                <PdsTabGroup
                    size="md"
                    barPosition="bottom"
                    opaqueBackground={false}
                    surface="on-dark"
                    padding="tight"
                    border={true}
                    color="gray"
                >
                    <PdsTab>HOME</PdsTab>
                    <PdsTab>API</PdsTab>
                    <PdsTab>WIDGETS</PdsTab>
                    <PdsTab>LIVE MATCH TRACKERS</PdsTab>
                    <PdsTab>HOSTED SOLUTIONS</PdsTab>
                    <PdsTab>GAME BETS</PdsTab>
                </PdsTabGroup>
            </div>
        </>
    )
}

export default Header
