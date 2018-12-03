import axios from 'axios';

export default {
  fetchClips: async () => {
    let {data: result} = await axios.get('https://api.twitch.tv/helix/clips?broadcaster_id=120750024&first=6', {
      headers: {'Client-ID': 'cx0glu7dafdaesj7mhu5takmm3b2n2'},
    });

    return result.data
  }
}
