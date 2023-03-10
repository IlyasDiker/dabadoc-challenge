class AnswersController < ApplicationController
    before_action :set_answer, only: [:show, :update, :destroy]

    # GET /answers
    def index
        @answers = Answer.all
        render json: @answers
    end

    # GET /answers/:id
    def show
        render json: @answer
    end

    # POST /answers
    def create
        @answer = Answer.new(answer_params)
        if @answer.save
        render json: { message: 'Answer created successfully' }, status: :created
        else
        render json: { errors: @answer.errors }, status: :unprocessable_entity
        end
    end

    # PUT/PATCH /answers/:id
    def update
        if @answer.update(answer_params)
        render json: { message: 'Answer updated successfully' }
        else
        render json: { errors: @answer.errors }, status: :unprocessable_entity
        end
    end

    # DELETE /answers/:id
    def destroy
        @answer.destroy
        render json: { message: 'Answer deleted successfully' }
    end

    private

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def answer_params
      params.require(:answer).permit(:message, :user_id, :question_id)
    end
end
