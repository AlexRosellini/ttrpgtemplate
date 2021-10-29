import React, { useState } from 'react';

const data = [
    {
        name: "Iomedae",
        alignment: "Lawful Good",
        picture: `https://64.media.tumblr.com/73a33b799b261e11a789e9543ea87491/e10344c7399f6529-22/s500x750/de4d43f620f585de5c68302704fc0bf512a3b833.png`,
        description: `The Goddess of Humanity, Iomedae embodies the values of Justice, Self-Sacrifice as well as order against the forces of
        evil.`,
        physical: `Xavier's stats become 25 and he gains DR10 against Acid and cold. Furthermore, he can create two angelic wings and a halo of light.
        this halo of light gives allies (and himself) a +4 to attack and damage; while giving any evil creature that sees it a -4 to all rolls.`,
        abilities: `Xavier gain the ability to create Heavenly fire that does double damage against evil opponent,
        no damage to good opponent, and regular damage to neutral opponent. Furthermore, he gains the ability to control light.`,
        domain: `Xavier becomes able cast healing spell, and to resurrect creatures dead for no more than 1 year per level. Moreover, he can
        create a firery longsword.`
    },
    {
        name: "Desna",
        alignment: "Chaotic Good",
        picture: `https://i.imgur.com/5jSGNmC.jpeg`,
        description: `The Goddess of stars, dreams and freedom. Desna embodies good in its pure and absolute form, and doesn't care about
        law and restrictions.`,
        physical:`Xavier's dexterity becomes 30, while he gains DR 10 against cold and electricity; he also becomes immune to paralysis. Finally,
        Xavier can create a pair of blue butterfly wings on his back.`,
        abilities:`Xavier become able to use magic through songs and music. He can use it to buff or debuff opponent, as well as remove corruption or regrow swaths of vegetation.
        Moreover, Xavier gains the ability to control starlight, but only during night. Finally, Xavier can also put a creature to sleep, as well as view, enter or control.
        their dreams.`,
        domain: `Xavier gains 20 luck points that he can add to any dice, they regenerate every morning. Moreover, he can create a Starknife that automatically return to his hand.`
    },
    {
        name: "Asmodeus",
        alignment: "Lawful Evil",
        picture: `https://steamuserimages-a.akamaihd.net/ugc/1465310230251830370/25AF1B473A93CF484AEBA5CE53903AE3CB2D8EFF/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`,
        description:`Queen of Hell and master of the Fallen. Asmodeus embodies law in its most brutal form; she is a master of contract who seeks
        to bend the multiverse to her will.`,
        physical:`Xavier's intelligence becomes 30, and he gains full immunity to fire and mind effect as well as DR 10 against
        acid, he can also create two devil wings onto his back.`,
        abilities:`Xavier can create devil contract with as many conditions as he wishes and grant power through them
        based around his own capabilities; Moreover he can create and manipulate hellfire, which does
        not require any fuel and burn until he removes it. It does double damage against good aligned foes.`,
        domain:`Once a day per level, Xavier can force all foes to roll a will save or be frightened. Moreover, he
        gains the ability to detect any form of lie instinctively.`
    },
    {
        name: "Erastil",
        alignment: "Lawful Good",
        picture: `https://s1.zerochan.net/Schwarz.%28Arknights%29.600.2933452.jpg`,
        description: `The goddess of the hunt and one of the oldest gods of Golarion. Schwarz believes in communion between
        all beings and nature, she protects harvet, as well as grants bountiful hunts.`,
        physical: `Xavier's dexterity becomes 30 and constitution becomes 30 and he becomes immune to disease, he also gains
        dark vision and a +5 to every dice made in a forest. Moreover, he gains the tracking skill while attuned, with 
        automatically max ranked in it.`,
        abilities: `Xavier gains the ability to morph into any animals he has seen, as well as manipulate nature; he gains the ability
        to turn animals into allies if they are "sane" (aka uncorrupted); Through his control of nature, Xavier can also create any 
        vegetal element.`,
        domain: `Xavier becomes immuned to crit fails while in a forest; moreover he can turn one dice a day into a natural 20 while in a forest.`
    },
]

const Template = () => {
    const [active, setActive] = useState([]);
    return ( 
        <>
        <nav className="nav">
            <div className="nav__ul">
                {data.map(select => (
                    <li className="nav__li" 
                    key={select.name} 
                    active={active === select.name} 
                    onClick={() => setActive([select.name, select.alignment, select.picture, select.description, select.physical, select.abilities, select.domain])}> 
                    {select.name} </li>             
                ))}
                {console.log(active)}
            </div>
        </nav>
        <div className="card">
            <div className="card-left">
                <div className="card-picture">
                    <img src={active[2]} alt="" />
                </div>
            </div>
            <div className="card-right">
                <div className="card-right__title">
                    <h1> {active[0]} </h1>
                    <p>Alignment: {active[1]}</p>
                    <p> {active[3]} </p>
                </div>
                <div className="card-right__abilities">
                    <h2>Physical Abilities when attuned -</h2>
                    <p> {active[4]} </p>
                </div>
                <div className="card-right__abilities">
                    <h2>Main Abilities when attuned -</h2>
                    <p> {active[5]} </p>
                </div>
                <div className="card-right__abilities">
                    <h2>Domain Abilities when attuned -</h2>
                    <p> {active[6]} </p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Template;