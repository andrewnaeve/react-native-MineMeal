// ReactotronConfig.js
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

reactotronRedux({
  isActionImportant: action => action.type === 'repo.receive'
})

// then add it to the plugin list
Reactotron
  .configure({ name: 'MineMeal' })
  .use(reactotronRedux()) //  <- here i am!
  .connect() //Don't forget about me!
