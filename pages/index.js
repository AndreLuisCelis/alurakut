
import MainGrid from '../scr/components/MainGrid';
import Box from '../scr/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../scr/libs/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../scr/components/ProfilesRelations';


function ProfileSideBar(props) {
  return (
    <Box>
      Imagens
      <img src={`https://github.com/${props.githubUser}.png`} alt=""
        style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const userAleatorio = 'AndreLuiscelis';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className='profileArea' style={{ gridArea: 'profileArea' }} >
        <ProfileSideBar githubUser = {userAleatorio}></ProfileSideBar>
      </div>
      <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo

          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className='profileRelationArea' style={{ gridArea: 'profileRelationArea' }}>
      <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
