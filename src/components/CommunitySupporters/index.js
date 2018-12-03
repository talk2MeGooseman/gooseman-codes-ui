import React, { PureComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Title } from "../shared/StyledComponents";

let bitDonaters = [
  {
    user_id: '120750024',
    rank: 1,
    score: 12543,
  },
  {
    user_id: '107739226',
    rank: 1,
    score: 12543,
  },
];

let subsStub = {
  _total: 4,
  subscriptions: [
    {
      _id: 'e5e2ddc37e74aa9636625e8d2cc2e54648a30418',
      created_at: '2016-04-06T04:44:31Z',
      sub_plan: '1000',
      sub_plan_name: 'Channel Subscription (mr_woodchuck)',
      user: {
        _id: '89614178',
        bio:
          'Twitch staff member who is a heimerdinger main on the road to diamond.',
        created_at: '2015-04-26T18:45:34Z',
        display_name: 'Mr_Woodchuck',
        logo:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/mr_woodchuck-profile_image-a8b10154f47942bc-300x300.jpeg',
        name: 'mr_woodchuck',
        type: 'staff',
        updated_at: '2017-04-06T00:14:13Z',
      },
    },
  ],
};

const SupporterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Supporter = styled.div`
  width: 8rem;
  flex: 1;
`;

const Card = styled.div`
  background: #212121;
  color: #fafafa;
  border-radius: 5px;
  display: inline-block;
  padding: 1rem;
`;

const ProfilePic = styled.img`
  background: #000;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

// Fetch the users the have donated bits
// Then process those users to displaying

class CommunitySupporters extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      bitDonaters: [],
      bitUsers: [],
      subs: [],
    };
  }

  componentDidMount() {
    this._fetchBitDonators();
    this._fetchSubscribers();
  }

  _fetchSubscribers() {
    // Sub Request
    this.setState({
      subs: subsStub.subscriptions,
    });
  }

  async _fetchBitDonators() {
    // Some API CALL to fetch bit donators
    //MAGIC HAPPENS

    // Then we fetch the user information for the donators
    this.setState(
      {
        bitDonaters: bitDonaters,
      },
      () => this._fetchUsers(this.state.bitDonaters)
    );
  }

  async _fetchUsers(users) {
    let ids = users.map(u => {
      return `id=${u.user_id}`;
    });

    let params = ids.join('&');

    let { data: result } = await axios.get(
      `https://api.twitch.tv/helix/users?${params}`,
      {
        headers: { 'Client-ID': 'cx0glu7dafdaesj7mhu5takmm3b2n2' },
      }
    );

    this.setState({
      bitUsers: result.data,
    });
  }

  _renderBitDonators() {
    let components = [];

    if (this.state.bitUsers.length === 0) {
      return null;
    }

    this.state.bitDonaters.forEach(donatorInfo => {
      let user_id = donatorInfo.user_id;

      let userInfo = this.state.bitUsers.find(user => {
        return user.id === user_id;
      });

      components.push(
        <Supporter>
          <Card>
            <ProfilePic src={userInfo.profile_image_url} />
            <h2>Bits: {donatorInfo.score}</h2>
            <h3>{userInfo.display_name}</h3>
          </Card>
        </Supporter>
      );
    });
    return components;
  }

  _renderSubs() {
    let components = [];
    this.state.subs.forEach(sub => {
      components.push(
        <Supporter>
          <Card>
            <ProfilePic src={sub.user.logo} />
            <h3>{sub.user.display_name}</h3>
          </Card>
        </Supporter>
      );
    });
    return components;
  }

  render() {
    return (
      <section id="supporters" className="site-section">
        <Title className="header" content="Community Supporters" />
        <h2 className="subtitle">Bit Donators:</h2>
        <SupporterContainer className="text-center">
          {this._renderBitDonators()}
        </SupporterContainer>
        <h2 className="subtitle">Subscribers:</h2>
        <SupporterContainer className="text-center">
          {this._renderSubs()}
        </SupporterContainer>
      </section>
    );
  }
}

export default CommunitySupporters;
