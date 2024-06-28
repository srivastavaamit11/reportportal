class ApiService {
  constructor(startDate, endDate) {
      this.startDate = this.formatDate(startDate);
      this.endDate = this.formatDate(endDate);
      this.urls = [
          `https://localhost:7086/api/Engineering/EpicList?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/IndependentStory?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/TechnicalTask?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/Automation?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/AutomationCount?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/BugsRaised?startDate=${this.startDate}&endDate=${this.endDate}`,
          `https://localhost:7086/api/Engineering/BugsDelivered?startDate=${this.startDate}&endDate=${this.endDate}`
      ];
  }

  formatDate(date) {
      const d = new Date(date);
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
  }

  async fetchData() {
      try {
          const responses = await Promise.all(
              this.urls.map(url =>
                  fetch(url, {
                      mode: 'cors'
                  }).then(response => {
                      if (!response.ok) {
                          throw new Error(`Network response was not ok for URL: ${url}`);
                      }
                      return response.json();
                  })
              )
          );
          return responses;
      } catch (error) {
          console.error('Fetch error:', error);
          return [];
      }
  }
}

export default ApiService;
