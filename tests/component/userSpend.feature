Feature: Get User Spend

  Scenario Outline: I can GET user spending insights for given time period
    Given I have the following from date, <from>
    And I have the following to data, <to>
    When I call "GET" "/emma/users/<userId>/spend"
    Then I should get the expected status code <status>
    And <name> response body should match their expected <responseType>

    Examples:
      | status | userId                               | from                       | to                         | name | responseType|
      | 200    | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a | '2019-10-24T10:07:46.986Z' | '2020-10-25T10:07:46.986Z' | 'winston' | 'all' |