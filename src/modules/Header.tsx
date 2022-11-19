

type Props = {}

function Header({}: Props) {
  return (
    <div class="header my-20">
      <section class="left-title">
        <div class="name">Eva Malek</div>
        <div class="title">Motion Graphics Designer</div>
      </section>
        <section class="right-links space-x-10 items-center justify-center">
            <div class="link">Animation</div>
            <div class="link">Reel</div>
            <div class="link">Contact</div>
        </section>
    </div>
  )
}

export default Header