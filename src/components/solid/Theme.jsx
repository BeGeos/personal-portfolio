import {DARK, LIGHT, PANCAKE, BARBIE, DARCULA} from '@stores/theme'

const changeTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme)
}

const Theme = (props) => {
    return (<li>
        <button onClick={() => changeTheme(props.theme)} class="py-2 px-6 w-full hover:text-accent transition-color font-medium rounded-full hover:bg-accent-muted" >
            {props.text}
        </button>
    </li>)
}

const Menu = () => {
    return <ul aria-label="themes" class="hidden absolute backdrop-blur top-0 right-[120%] py-6 px-2 max-w-fit text-center text-primary-300 rounded-lg bg-primary-highlight shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg group-focus:block group-focus-within:block">
        <Theme text='Dark' theme={DARK} />
        <Theme text='Light' theme={LIGHT} />
        <Theme text='Pancake' theme={PANCAKE} />
        <Theme text='Barbie' theme={BARBIE} />
        <Theme text='Darcula' theme={DARCULA} />
    </ul>

}

const Themes = (props) => {
    return <div class="group relative">
    <button class="text-primary-500">
        {props.text}
    </button>
    <Menu />
</div>
}

export default Themes