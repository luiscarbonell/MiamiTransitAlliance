import React, { Component } from 'react';
import './App.css';






class Header extends Component {

  constructor() {
      super();

      this.state = {
        showDayofWeek: false,
      };

      this.showDayofWeek = this.showDayofWeek.bind(this);
      this.closeDayofWeek = this.closeDayofWeek.bind(this);
    }

    showDayofWeek(event) {
      event.preventDefault();

      this.setState({ showDayofWeek: true }, () => {
        document.addEventListener('click', this.closeDayofWeek);
      });
    }

    closeDayofWeek(event) {

      if (!this.dropdownDayofWeek.contains(event.target)) {

        this.setState({ showDayofWeek: false }, () => {
          document.removeEventListener('click', this.closeDayofWeek);
        });

      }
    }


  render() {
    return (
          <div>
              <button onClick={this.showDayofWeek}>
                Show Day of Week
              </button>

              {
                this.state.showDayofWeek
                  ? (
                    <div
                      className="DayofWeek"
                      ref={(element) => {
                        this.dropdownDayofWeek = element;
                      }}
                    >
                      <button> Sunday </button>
                      <button> Monday </button>
                      <button> Tuesday </button>
                      <button> Wednesday </button>
                      <button> Thursday </button>
                      <button> Friday </button>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </div>
          );
        }
      }


export default Header;
