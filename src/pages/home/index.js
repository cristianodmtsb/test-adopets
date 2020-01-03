import React, { Component } from "react";
import api from "../../services/api";

import { Spin, Row, Col, Layout } from "antd";

import HeaderHome from "../../components/header";
import CardPet from "../../components/Card";
import Filter from "../../components/filter";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: {},
      countPets: 0,
      isLoading: true,
      errors: null,
      search: {}
    };
  }

  /**
   * List pets from API
   */
  async componentDidMount() {
    await api
      .post("pet/search")
      .then(response => {
        this.setState({
          pets: response.data.data.result,
          countPets: response.data.data.count,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  /**
   * Refresh list from API with search params
   */
  refreshlistPets = async () => {
    await api
      .post("pet/search", { search: this.state.search })
      .then(response => {
        this.setState({
          pets: response.data.data.result,
          countPets: response.data.data.count,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  /**
   * Change state and call refresh list for new consult
   */
  filterSexPets = (key, e) => {
    if (e === "all") {
      this.setState(
        {
          search: {},
          isLoading: true
        },
        () => {
          this.refreshlistPets();
        }
      );
    } else {
      this.setState(
        {
          search: { ...this.state.search, [key]: e },
          isLoading: true
        },
        () => {
          this.refreshlistPets();
        }
      );
    }
  };

  render() {
    const { isLoading, pets, countPets } = this.state;
    return (
      <>
        <Layout>
          <HeaderHome />
          <Content
            style={{
              margin: "24px auto",
              padding: 24,
              minHeight: 280,
              width: "100%",
              maxWidth: 980
            }}
          >
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} type="flex">
              {/* Get filter component */}
              <Filter handleChange={this.filterSexPets} countPets={countPets} />
            </Row>
            <Row
              gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
              type="flex"
              justify="center"
            >
              {!isLoading ? (
                pets.map(pet => {
                  return (
                    <Col key={pet.id} xs={24} sm={12} md={8} lg={8}>
                      {/* Get Card component */}
                      <CardPet
                        PetName={pet.name}
                        PetSex={pet.sex_key}
                        PetAge={pet.age_key}
                        PetSize={pet.size_key}
                        PetStatus={pet.status_key}
                      />
                    </Col>
                  );
                })
              ) : (
                <div>
                  <Spin size="large" /> Loading...
                </div>
              )}
            </Row>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Home;
