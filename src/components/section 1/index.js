import Title from "../common/Title"
import Video from "../Video"
import { Wrapper } from "./styles"

export default function Section1() {
  return (
    <Wrapper>
      <Title
       title='Celebrating Love With Us'
       text='Blandit cursus risus at ultrices mi tempus 
       imperdiet. Vulputate mi sit amet mauris commodo quis imperdiet. Porta nibh venenatis cras sed felis eget velit.'/>
      <Video />
    </Wrapper>
  )
}